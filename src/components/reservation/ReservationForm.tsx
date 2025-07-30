import React, { useRef, useState } from "react";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

// // Icons
// import { GoLocation } from "react-icons/go";
// import { IoMailOutline } from "react-icons/io5";
// import { CiPhone } from "react-icons/ci";
// import Walawwa from "../../assets/logos/sketch-white.png";

import {
    TextField,
    Button,
    MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

const ReservationForm = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [date, setDate] = React.useState<Dayjs | null>(null);
    const [timeSlot, setTimeSlot] = React.useState('');

    const [schoolName, setSchoolName] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [contactPerson, setContactPerson] = useState<string>('');

    // stcount validation
    const [studentCount, setStudentCount] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');

    // contactno validation
    const [contactNumber, setContactNumber] = useState<string>('');
    const [cnError, setCnError] = useState<boolean>(false);
    const [cnHelperText, setCnHelperText] = useState<string>('');

    // form reservation fun
    const sendReservation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(formRef.current!);
        const reservationData = {
            schoolName: data.get('schoolname'),
            contactPerson: data.get('contactperson'),
            contactNumber: data.get('contactNumber'),
            email: data.get('email'),
            studentCount: data.get('studentcount'),
            date: date?.format('YYYY-MM-DD'),
            timeSlot: timeSlot,
        };

        console.log('Reservation:', reservationData);
        // email js

       // successfull alert
        toast.success("Reservation submitted successfully and confirmation sent to your mail. We'll get back to you!. ", {
            duration: 8000,
        });


        //reset fields
        formRef.current?.reset();
        setSchoolName('');
        setEmailAddress('');
        setContactPerson('');
        setDate(null);
        setTimeSlot('');
        setContactNumber('');
        setStudentCount('');
    };


    return (
        <>
            <div className="relative py-5 w-11/12 lg:w-full mx-auto">
                <div className="lg:w-5/6 mx-auto flex justify-center items-center h-auto lg:h-[100vh]">
                    {/* Desktop view */}
                    <div className="flex gap-10 lg:gap-1 p-3 flex-col lg:flex-row w-full">
                        {/* content */}
                        <div className="lg:w-1/3 w-full md:w-full mt-0 md:mt-15 lg:mt-0">
                            <h1 className="font-bold text-[60px] lg:text-[75px]  leading-tight flex flex-wrap gap-x-5">
                                {"Reservation For School".split(" ").map((word, i) => (
                                    <span
                                        key={i}
                                        className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </h1>
                            <p className="mb-3 text-gray-500">
                                Secure your group’s visit to our museum by booking your preferred time slot in advance. Reservations are essential to manage daily capacity and ensure the best experience for all visitors.
                            </p>

                            <p
                                className="mb-3 text-gray-300">
                                Only 500 students allowed per day, reserve early to guarantee your spot!
                            </p>

                            <div className="flex flex-col gap-8 mt-10">
                                {/* <ul className=" w-full lg:w-full font-normal flex flex-col gap-2 lg:gap-3 lg:flex-col lg:pl-0 lg:justify-between">
                                    <li className="flex flex-row items-center gap-2 text-body/[0.8]">
                                        <CiPhone className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                                        <div className="text-gray-500">
                                            <p>+94 777 371 464 | +94 707 371 464</p>
                                        </div>
                                    </li>
                                    <li className="flex flex-row items-center gap-2 text-gray-500/[0.8]">
                                        <IoMailOutline className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                                        <div className="text-gray-500">
                                            <p>info@eahelepolawalawwa.com</p>
                                        </div>
                                    </li>
                                    <li className="flex flex-row items-center gap-2 text-gray-500/[0.8]">
                                        <GoLocation className="text-gray-200 text- bold text-sm w-10 h-10 p-2 border bg-primary rounded-2xl bg-body hover:border-primary hover:bg-secondary hover:text-primary" />
                                        <div className="text-gray-500">
                                            <p>
                                                Ehelepola Walawwa, Raja Veediya, Senkadagala, Mahanuwara
                                            </p>
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        {/* from */}
                        <div className="w-full lg:w-2/3 flex justify-center items-center">
                            {/* reservation form */}
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <form
                                    ref={formRef}
                                    onSubmit={sendReservation}
                                    className="w-full lg:pl-30 flex flex-col gap-3">

                                    <TextField
                                        name="schoolname"
                                        label="School Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={schoolName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value: string = e.target.value;
                                            setSchoolName(value);
                                        }}
                                        sx={{
                                            input: { color: 'white' }, // input text
                                            label: { color: 'white', backgroundColor: 'black', px: 0.5 }, // floating label
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    />

                                    <TextField
                                        name="contactperson"
                                        label="Contact Person Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={contactPerson}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value: string = e.target.value;
                                            setContactPerson(value);
                                        }}
                                        sx={{
                                            input: { color: 'white' }, // input text
                                            label: { color: 'white', backgroundColor: 'black', px: 0.5 }, // floating label
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    />

                                    <TextField
                                        name="contactNumber"
                                        label="Contact Number"
                                        type="text"
                                        inputProps={{
                                            inputMode: 'numeric',
                                            pattern: '[0-9]*',
                                            maxLength: 10,
                                        }}
                                        value={contactNumber}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value: string = e.target.value;

                                            //ensure numeric value
                                            if (!/^\d*$/.test(value)) {
                                                return;
                                            } else {
                                                //get input value
                                                setContactNumber(value);
                                            }

                                            //validation
                                            if (value.length !== 10) {
                                                setCnError(true);
                                                setCnHelperText('Contact number must be 9 digits. ex - 077XXXXXXX');
                                            } else {
                                                setCnError(false);
                                                setCnHelperText('');
                                            }
                                        }}
                                        variant="outlined"
                                        error={cnError}
                                        helperText={cnHelperText}
                                        fullWidth
                                        required
                                        sx={{
                                            input: { color: 'white' }, // input text
                                            label: { color: 'white', backgroundColor: 'black', px: 0.5 }, // floating label
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                            '& .MuiFormHelperText-root': {
                                                color: 'red',
                                            },
                                        }}
                                    />

                                    <TextField
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        value={emailAddress}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value: string = e.target.value;
                                            setEmailAddress(value);
                                        }}
                                        sx={{
                                            input: { color: 'white' }, // input text
                                            label: { color: 'white', backgroundColor: 'black', px: 0.5 }, // floating label
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    />

                                    <TextField
                                        name="studentcount"
                                        label="Student count"
                                        type="number"
                                        value={studentCount}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value, 10);
                                            setStudentCount(e.target.value);

                                            if (value < 1 || value > 250 || isNaN(value)) {
                                                setError(true);
                                                setHelperText('Student count must be between 1 and 250');
                                            } else {
                                                setError(false);
                                                setHelperText('');
                                            }
                                        }}
                                        inputProps={{ min: 1, max: 250 }}
                                        error={error}
                                        helperText={helperText}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{
                                            input: { color: 'white' },
                                            label: { color: 'white', backgroundColor: 'black', px: 0.5 },
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                            '& .MuiFormHelperText-root': {
                                                color: 'red',
                                            },
                                        }}
                                    />

                                    <DatePicker
                                        label="Select Date"
                                        value={date}
                                        onChange={(newValue) => setDate(newValue)}
                                        disablePast
                                        enableAccessibleFieldDOMStructure={false}
                                        slots={{
                                            textField: (params) => (
                                                <TextField
                                                    {...params}
                                                    name="date"
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        input: { color: 'white' },
                                                        label: { color: 'white', backgroundColor: 'black', px: 0.5 },
                                                        '& .MuiOutlinedInput-root': {
                                                            color: 'white',
                                                            borderRadius: '10px',
                                                            '& fieldset': {
                                                                borderColor: 'white',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'white',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: 'white',
                                                            },
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'white',
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            color: 'white',
                                                        },
                                                    }}
                                                />
                                            ),
                                        }}
                                    />

                                    <TextField
                                        select
                                        name="timeSlot"
                                        label="Time Slot"
                                        value={timeSlot}
                                        onChange={(e) => setTimeSlot(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{
                                            input: { color: 'white' },
                                            label: {
                                                color: 'white',
                                                backgroundColor: 'black',
                                                px: 0.5
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                color: 'white',
                                                borderRadius: '10px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& label.Mui-focused': {
                                                color: 'white',
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    >
                                        <MenuItem value="">Select a time slot</MenuItem>
                                        <MenuItem value="9.00 AM - 11.00 AM">9.00 AM - 11.00 AM</MenuItem>
                                        <MenuItem value="1.00 PM - 3.00 PM">1.00 PM - 3.00 PM</MenuItem>
                                    </TextField>

                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        className="mt-4"
                                        sx={{
                                            px: 2,
                                            py: 2,
                                            textTransform: "none",
                                            backdropFilter: 'blur(10px)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                            color: 'white',
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                color: 'black',
                                                borderColor: 'white',
                                            },
                                            fontSize: '16px',
                                        }}
                                    >
                                        Submit Reserversion
                                    </Button>
                                </form>
                            </LocalizationProvider>

                        </div>
                    </div>
                </div>
                <Toaster
                    position="bottom-center"
                    toastOptions={{
                        duration: 8000,
                        style: {
                            background: '#ffffff',
                            color: '#000000',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                        },
                    }}
                />
            </div>
        </>
    )
}


export default ReservationForm