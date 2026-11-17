import Panel from "../Panel/Panel";

interface Props{
    className?:string;
}

export default function Logs({className}:Props){

    return(

        <div className={className}>

            <Panel title="Logs">

                LOGS

            </Panel>

        </div>

    )

}