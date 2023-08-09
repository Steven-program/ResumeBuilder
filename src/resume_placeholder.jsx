import React, { useState } from "react";


export default function ResumeRender(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [dateBegin, setDateBegin] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [location, setLocation] = useState('');


    const [location2, setLocation2] = useState('');
    const [company1, setCompany1] = useState('');
    const [dateBegin2, setDateBegin2] = useState('');
    const [dateEnd2, setDateEnd2] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');

    const [location3, setLocation3] = useState('');
    const [company3, setCompany3] = useState('');
    const [dateBegin3, setDateBegin3] = useState('');
    const [dateEnd3, setDateEnd3] = useState('');
    const [role3, setRole3] = useState('');
    const [description3, setDescription3] = useState('');

    function clearResume() {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setSchool('');
        setDegree('');
        setDateBegin('');
        setDateEnd('');
        setLocation('');

        setRole('');
        setLocation2('');
        setDateBegin2('');
        setDateEnd2('');
        setCompany1('');
        setDescription('');


        setRole3('');
        setLocation3('');
        setDateBegin3('');
        setDateEnd3('');
        setCompany3('');
        setDescription3('');
    }

    return (
        <>
            <div className="container">
                <div className="edit">
                    <button className="modify" onClick={clearResume}><i class="fa-solid fa-trash"></i>Reset Resume</button>

                    <div className="personal-details">
                        <h1 className="pd">Personal Details</h1>
                        <div className="info">
                            <h3>Full Name</h3>
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>

                        <div className="info">
                            <h3>Email</h3>
                            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="info">
                            <h3>Phone Number </h3>
                            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>

                        <div className="info">
                            <h3>Address</h3>
                            <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
                        </div>
                    </div>

                    <div className="centered education-edit">
                        <div className="scroll">
                            <div className="education-details">
                                <h1 className="pd">Education</h1>
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
                        </div>

                    </div>

                    <div className="centered">
                        <div>
                            <div className="professional-experience">
                            <h1 className="pd">Experience</h1>
                            <div className="info">
                                <h3>Company Name</h3>
                                <input type="text" value={company1} onChange={(event) => setCompany1(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Role</h3>
                                <input type="text" value={role} onChange={(event) => setRole(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Start Date</h3>
                                <input type="text" value={dateBegin2} onChange={(event) => setDateBegin2(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>End Date</h3>
                                <input type="text" value={dateEnd2} onChange={(event) => setDateEnd2(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Location</h3>
                                <input type="text" value={location2} onChange={(event) => setLocation2(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Description</h3>
                                <input type="text" value={description} class="long-description" onChange={(event) => setDescription(event.target.value)}></input>
                            </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="centered">
                        <div>
                            <div className="professional-experience">
                            <h1 className="pd">Experience</h1>
                            <div className="info">
                                <h3>Company Name</h3>
                                <input type="text" value={company3} onChange={(event) => setCompany3(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Role</h3>
                                <input type="text" value={role3} onChange={(event) => setRole3(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Start Date</h3>
                                <input type="text" value={dateBegin3} onChange={(event) => setDateBegin3(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>End Date</h3>
                                <input type="text" value={dateEnd3} onChange={(event) => setDateEnd3(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Location</h3>
                                <input type="text" value={location3} onChange={(event) => setLocation3(event.target.value)} />
                            </div>

                            <div className="info">
                                <h3>Description</h3>
                                <input type="text" value={description3} class="long-description" onChange={(event) => setDescription3(event.target.value)}></input>
                            </div>
                            </div>
                            
                        </div>
                    </div>


                </div>
                <div className="resume">
                    <div className="header">
                        <h1 className="name">{name ? name : "Name"}</h1>
                        <div className="personal">
                            <p className="email"><i class="fa-solid fa-envelope"></i>{email ? email : "Email"}</p>
                            <p className="phone"><i class="fa-solid fa-phone"></i>{phone ? phone : "Phone Number"}</p>
                            <p className="location"><i class="fa-solid fa-location-dot"></i>{address ? address : "Address"}</p>
                        </div>
                    </div>

                    <div className="body">
                        <div className="education-whole">
                            <div className="exp">
                                <h2 className="education">Education</h2>
                            </div>

                            <div className="description">
                                <div className="date-time">
                                    <p>{dateBegin ? dateBegin : "7/8/23"} &#8211; {dateEnd ? dateEnd : "current"}</p>
                                    <p>{location ? location : "Ann Arbor, MI"}</p>
                                </div>

                                <div className="college">
                                    <h3>{school ? school : "University of Michigan"}</h3>
                                    <p className="font-s">{degree ? degree : "Bachelor's"}</p>
                                </div>
                            </div>
                        </div>

                        <div className="professional">
                            <div className="exp">
                                <h2 className="experience">Professional Experience</h2>
                            </div>


                            <div className="description">
                                <div className="date-time">
                                    <p>{dateBegin2 || "04/2018"} &#8211; {dateEnd2 || " 02/2019"}</p>
                                    <p>{location2 || "Orlando, FL"}</p>
                                </div>

                                <div className="descr">
                                    <h3>{company1 || "Lockheed Martin"}</h3>
                                    <p className="font-s"><i>{role || "Cybersecurity analyst"}</i></p>
                                    <p className="font-s">{description || "I was responsible for identifying, assessing, and mitigating potential security risks and vulnerabilities within an organization's information systems and networks."}</p>
                                </div>
                            </div>

                            <div className="description">
                                <div className="date-time">
                                    <p>{dateBegin3||"04/2018"} &#8211; {dateEnd3||"02/2019"}</p>
                                    <p>{location3||"Berlin, Germany"}</p>
                                </div>

                                <div className="descr">
                                    <h3>{company3||"Google"}</h3>
                                    <p className="font-s"><i>{role3||"IT Support Specialist"}</i></p>
                                    <p className="font-s">{description3||"Provided technical support to end-users, troubleshooting hardware and software issues to maintain seamless operations."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

