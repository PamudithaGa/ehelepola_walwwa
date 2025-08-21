import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { TextField, Button, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

type SlotAvailability = {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  max_capacity: number;
  reserved_count: number;
  available_spots: number;
};

const MAX_CAPACITY = 260;

const ReservationFormBackend: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [slots, setSlots] = useState<SlotAvailability[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [schoolName, setSchoolName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [studentCount, setStudentCount] = useState<number | "">("");
  const [staffCount, setStaffCount] = useState<number | "">("");
  const [capacityError, setCapacityError] = useState("");
  const [showPayPal, setShowPayPal] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    if (!selectedDate) return;

    // Fetch available time slots for the selected date
    const fetchAvailability = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/reservations/time-slots-availability?date=${selectedDate.format(
            "YYYY-MM-DD"
          )}`
        );
        if (!response.ok) throw new Error("Failed to fetch availability");
        const data = await response.json();
        setSlots(data);
        setSelectedSlot(null);
      } catch (error) {
        toast.error("Failed to load slot availability");
        setSlots([]);
      }
    };

    fetchAvailability();
  }, [selectedDate]);

  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(dayjs(arg.dateStr));
  };

  // Handle capacity check on count change
  const handleStudentCountChange = (value: number) => {
    setStudentCount(value);
    if (value + (staffCount || 0) > MAX_CAPACITY) {
      setCapacityError(
        `Total of students ${MAX_CAPACITY - 10} and staff can't exceed ${10}`
      );
    } else {
      setCapacityError("");
    }
  };

  const handleStaffCountChange = (value: number) => {
    setStaffCount(value);
    if ((studentCount || 0) + value > 11) {
      setCapacityError(
        `Total of students ${MAX_CAPACITY - 10} and staff can't exceed ${10}`
      );
    } else {
      setCapacityError("");
    }
  };

  // Submit reservation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if (!selectedSlot) {
      toast.error("Please select a time slot");
      return;
    }
    if (
      !schoolName ||
      !contactPerson ||
      !contactNumber ||
      !emailAddress ||
      !studentCount ||
      !staffCount
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (studentCount < 1 || studentCount > MAX_CAPACITY - 10) {
      toast.error(`Student count must be between 1 and ${MAX_CAPACITY - 10}`);
      return;
    }
    if (capacityError) {
      toast.error(capacityError);
      return;
    }

    try {
      // Step 1: Create reservation in backend
      const reservationRes = await axios.post(
        "http://localhost:5000/api/reservations/add",
        {
          date: selectedDate.format("YYYY-MM-DD"),
          timeSlotId: selectedSlot,
          schoolName,
          contactPerson,
          contactNumber,
          emailAddress,
          studentCount,
          staffCount,
        }
      );

      const reservationId = reservationRes.data.reservation.id;

      // Step 2: Create Stripe Checkout session
      const stripeRes = await axios.post(
        "http://localhost:5000/api/payments/create-checkout-session",
        { reservationId }
      );

      // Step 3: Redirect to Stripe Checkout
      window.location.href = stripeRes.data.sessionUrl;
    } catch (error) {
      console.error("Error during reservation/payment:", error);
      toast.error("Reservation or Payment failed");
    }
  };

  const resetForm = () => {
    setSchoolName("");
    setContactPerson("");
    setContactNumber("");
    setEmailAddress("");
    setStudentCount("");
    setStaffCount("");
    setSelectedDate(null);
    setSelectedSlot(null);
    setSlots([]);
    setShowPayPal(false);
    setBookingData(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <Typography variant="h3" gutterBottom>
        Reservation For School
      </Typography>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        dateClick={handleDateClick}
        height="auto"
        dayMaxEvents={3}
      />

      {selectedDate && (
        <div className="mt-6 p-4 bg-primary border border-secondary rounded-lg">
          <Typography variant="h5">
            Selected Date: {selectedDate.format("YYYY-MM-DD")}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Available Time Slots:
          </Typography>

          {slots.length === 0 && (
            <Typography>No slots available for this day.</Typography>
          )}

          {slots.map((slot) => (
            <Button
              key={slot.id}
              variant={selectedSlot === slot.id ? "contained" : "outlined"}
              color={slot.available_spots === 0 ? "error" : "primary"}
              disabled={slot.available_spots - 10 <= 0}
              onClick={() => setSelectedSlot(slot.id)}
              sx={{ m: 1 }}
            >
              {slot.name} ({slot.available_spots - 10} spots left)
            </Button>
          ))}

          {!showPayPal && (
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4 max-w-md"
            >
              <TextField
                label="School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Contact Person"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              />
              <TextField
                label="Student Count"
                type="number"
                value={studentCount}
                onChange={(e) =>
                  handleStudentCountChange(parseInt(e.target.value, 10) || 0)
                }
                inputProps={{ min: 0, max: MAX_CAPACITY }}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                error={!!capacityError}
                helperText={capacityError}
              />
              <TextField
                label="Staff Count"
                type="number"
                value={staffCount}
                onChange={(e) =>
                  handleStaffCountChange(parseInt(e.target.value, 10) || 0)
                }
                inputProps={{ min: 0, max: 10 }}
                required
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "white" } }}
                error={!!capacityError}
                helperText={capacityError}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!!capacityError || !selectedSlot}
              >
                Proceed to Payment
              </Button>
            </form>
          )}

          {bookingData && (
            <div className="mt-4">
              <Typography variant="h6" gutterBottom>
                Total: USD {bookingData.studentCount * 10}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={async () => {
                  try {
                    const res = await axios.post(
                      "http://localhost:5000/api/payments/create-checkout-session",
                      {
                        reservationId: bookingData.id,
                      }
                    );
                    console.log(res.data);
                    window.location.href = res.data.sessionUrl;
                  } catch (err) {
                    alert("Payment error");
                  }
                }}
              >
                Checkout with Stripe
              </Button>
            </div>
          )}
        </div>
      )}

      <Toaster position="bottom-center" />
    </div>
  );
};

export default ReservationFormBackend;
