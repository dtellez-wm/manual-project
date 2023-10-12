import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiMap, HiLocationMarker, HiBell, HiUser, HiViewBoards } from "react-icons/hi";
function DefaultSidebar() {
  return (
    <Sidebar className="" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#prueba" icon={HiUser}>
            <p>MENÚ LATERAL</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>PERFIL DEL USUARIO</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>BARRA DE TAREAS</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>MAPA</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>UNIDADES</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiMap}>
            <p>BUSCADOR</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>RUTEO</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiLocationMarker}>
            <p>VENTANA DE UNIDADES</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <p>COLORIMETRÍA</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiBell}>
            <p>ÚLTIMA POSICIÓN</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiBell}>
            <p>NOTIFICACIONES</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DefaultSidebar;
