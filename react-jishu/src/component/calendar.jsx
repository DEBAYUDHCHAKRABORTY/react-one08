import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function Calender() {
    const [date, setDate] = useState(null);
    return (
        <div className="my-10">
            <h1 className="text-red-600 text-7xl">Calender 2025</h1>
            <div
                className="card flex justify-content-center">
                <Calendar className="bg-yellow-500 text-6xl" pt={{
                    root: { className: 'my-custom-calendar-root' }, // Styles the outer container
                    panel: { style: { backgroundColor: '#00f8ff' } }, // Styles the date picker panel
                    // You can target other elements like header, day, etc.
                }} value={date} onChange={(e) => setDate(e.value)} />
            </div>

        </div>
    );
}