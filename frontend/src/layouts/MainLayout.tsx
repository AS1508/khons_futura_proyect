import TopBar from "../components/TopBar/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";

import CameraPanel from "../components/CameraPanel/CameraPanel";
import Telemetry from "../components/Telemetry/Telemetry";
import MapPanel from "../components/MapPanel/MapPanel";
import Rover3D from "../components/Rover3D/Rover3D";
import Mobility from "../components/Mobility/Mobility";
import Logs from "../components/Logs/Logs";
import Teleoperation from "../components/Teleoperation/Teleoperation";


export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#090909] flex flex-col">

      <TopBar />

      <div className="flex">

        <Sidebar />

<main className="flex-1 overflow-y-auto p-4">

  <div
    className="
      grid
      gap-4
      min-h-[1200px]

      grid-cols-[2.7fr_1fr]
      grid-rows-[2fr_1.3fr_1.1fr]
    "
  >

    {/* Cámara */}

    <CameraPanel />

    {/* Telemetría */}

    <Telemetry />

    {/* Mapa + Rover */}

    <div className="grid grid-cols-[1.5fr_1fr] gap-4">

      <MapPanel />

      <Rover3D />

    </div>

    {/* Teleoperation */}

<div className="bg-red-500 h-[400px] rounded-xl flex items-center justify-center text-white text-3xl">
  TELEOPERATION
</div>

    {/* Mobility */}

    <Mobility />

    {/* Logs */}

    <Logs className="col-span-2" />

  </div>

</main>

      </div>

    </div>
  );
}