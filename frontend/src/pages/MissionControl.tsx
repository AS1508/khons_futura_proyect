import TopBar from "../components/TopBar/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";

import CameraPanel from "../components/CameraPanel/CameraPanel";
import Telemetry from "../components/Telemetry/Telemetry";
import Mission from "../components/Mission/Mission";
import MapPanel from "../components/MapPanel/MapPanel";
import Rover3D from "../components/Rover3D/Rover3D";
import Mobility from "../components/Mobility/Mobility";
import Logs from "../components/Logs/Logs";

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-[#090909] flex flex-col">

      <TopBar />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-4 overflow-y-auto">

          <div className="grid gap-4">

            {/* ===================================================== */}
            {/* PRIMARY OPERATIONAL LAYER                            */}
            {/* ===================================================== */}

            <div className="grid grid-cols-[2.8fr_1fr] gap-4">

              {/* CAMERA */}

              <CameraPanel />

              {/* CRITICAL TELEMETRY */}

              <Telemetry />

            </div>


            {/* ===================================================== */}
            {/* NAVIGATION + MOBILITY                                 */}
            {/* ===================================================== */}

            <div className="grid grid-cols-[2.8fr_1fr] gap-4">

              {/* TERRAIN / MAP */}

              <div className="grid grid-cols-[1.6fr_1fr] gap-4">

                <MapPanel />

                <Rover3D />

              </div>

              {/* MOBILITY SUMMARY */}

              <Mobility />

            </div>


            {/* ===================================================== */}
            {/* SECONDARY INFORMATION                                 */}
            {/* ===================================================== */}

            <div className="grid grid-cols-[2.8fr_1fr] gap-4">

              {/* MISSION */}

              <Mission />

              {/* SECONDARY SPACE */}
              
              <div />

            </div>


            {/* ===================================================== */}
            {/* LOGS                                                  */}
            {/* ===================================================== */}

            <Logs />

          </div>

        </main>

      </div>

    </div>
  );
}