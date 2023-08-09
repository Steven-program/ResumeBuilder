import React, {useState} from "react"

export default function EducationSection(){
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [dateBegin, setDateBegin] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div className = "education-details">
            <h1 className = "pd">Education</h1>
            <div className="info">
                <h3>Instituition</h3>
                <input type="text" value={school} onChange={(event) => setSchool(event.target.value)} />
            </div>

            <div className="info">
                <h3>Degree</h3>
                <input type="text" value={degree} onChange={(event) => setDegree(event.target.value)} />
            </div>

            <div className="info">
                <h3>Start Date</h3>
                <input type="text" value={dateBegin} onChange={(event) => setDateBegin(event.target.value)} />
            </div>

            <div className="info">
                <h3>End Date</h3>
                <input type="text" value={dateEnd} onChange={(event) => setDateEnd(event.target.value)} />
            </div>

            <div className="info">
                <h3>Location</h3>
                <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
            </div>
        </div>
    );
}