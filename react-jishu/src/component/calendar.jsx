import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function Calender() {
    const [date, setDate] = useState(null);
    return (
        <div>
            <h1>Calender 2025</h1>
            <div className="card flex justify-content-center bg-amber-100">
                <Calendar value={date} onChange={(e) => setDate(e.value)} />
            </div>
        </div>
    );
}