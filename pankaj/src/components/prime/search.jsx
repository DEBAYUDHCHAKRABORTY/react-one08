import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Search() {

    return (
        <div>
            <h1 className="text-2xl">Display a Search Field</h1>
            <label  > Search Google</label>
            <div className="my-2">
                <InputText />
            </div>
            <Button>Submit</Button>

        </div>
    )
}
