import { Sidebar, Button } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiMap, HiLocationMarker, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>LOGIN</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>VISOR</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>VENTANA</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>MENÚ</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>FUNCIONALIDAD</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiMap}>
            <p>MAPA</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>UNIDADES</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiLocationMarker}>
            <p>Ultima posición</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <p>Buscador</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <p>Notificación</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DefaultSidebar;
