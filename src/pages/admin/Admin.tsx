import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import Logo from "../../assets/logos/ehelepola-walauwwe-logo-black.png";
import ReservationDetails from "../ReservationDetails";

const Admin: React.FC = () => {
  return (
    <>
      <div className="flex gap-8">
        <section className="flex w-1/5 h-screen bg-primary ">
          <Sidebar aria-label="Sidebar with logo branding example">
            <img src={Logo} alt="Flowbite logo" className="w-48" />

            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={HiChartPie} className="text-white">
                  Dashboard
                </SidebarItem>
                <SidebarItem href="#" icon={HiInbox} className="text-white">
                  Upcomings
                </SidebarItem>
                <SidebarItem href="#" icon={HiUser} className="text-white">
                  Staff
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </section>

        <section className="w-4/5 p-8 bg-gray-50">
          <ReservationDetails />
        </section>
      </div>
    </>
  );
};

export default Admin;
