import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default function ResumeRender() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    function clearResume() {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
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

                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemHeading >
                                <AccordionItemButton>
                                    <i class="fa-solid fa-user-graduate"></i>What harsh truths do you prefer to ignore?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

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
                                    <p>08/2020 &#8211; present</p>
                                    <p>New York City, US</p>
                                </div>

                                <div className="college">
                                    <h3>London City University</h3>
                                    <p className="font-s">Bachelor in Economics</p>
                                </div>
                            </div>
                        </div>

                        <div className="professional">
                            <div className="exp">
                                <h2 className="experience">Professional Experience</h2>
                            </div>


                            <div className="description">
                                <div className="date-time">
                                    <p>08/2020 &#8211; present</p>
                                    <p>New York City, US</p>
                                </div>

                                <div className="descr">
                                    <h3>Umbrella Inc.</h3>
                                    <p className="font-s">UX & UI Designer</p>
                                    <p className="font-s">Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</p>
                                </div>
                            </div>

                            <div className="description">
                                <div className="date-time">
                                    <p>04/2018 &#8211; 02/2019</p>
                                    <p>Berlin, Germany</p>
                                </div>

                                <div className="descr">
                                    <h3>Black Mesa Labs</h3>
                                    <p className="font-s">UX Research Assistant</p>
                                    <p className="font-s">Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

