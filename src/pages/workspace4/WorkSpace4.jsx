import React, { useState } from 'react'
import { ArrowBigRight } from 'lucide-react';


const profileInitialState = {
    name: "",
    email: "",
    age: "",
    phone: ""
}

const interestInitialState = {
    fruit: "",
    car: "",
    bike: "",
    mobile: "",
    laptop: ""
}

const settingsInitialState = {
    cursorWidth: 10,
    textSize: 16,
    theme: "Dark",
    font: "Calibiri"
}

function WorkSpace4({setFont, setFontSize}) {
    const [currentTab, setCurrentTab] = useState("Profile");
    const [profileStates, setProfileStates] = useState(profileInitialState);
    const [interestStates, setInterestStates] = useState(interestInitialState);
    const [settingsStates, setSettingsStates] = useState(settingsInitialState);

    const setMasterFont = (e) => {
        setSettingsStates((prev) => ({...prev, font: e.target.value}));
        setFont(e.target.value);
    }

    const setMasterFontSize = (e) => {
        console.log(e.target.value);
        setSettingsStates((prev) => ({...prev, textSize: e.target.value}));
        setFontSize(e.target.value);
    }


    const innerContent = () => {
        switch (currentTab) {
            case "Profile":
                return (
                    <div className=' flex flex-col w-1/2 gap-2 p-2'>
                        <div>
                            <label>Name</label>
                            <input type='text' className=' bg-amber-500 ml-2 p-1' placeholder='Enter your name' value={profileStates.name} onChange={(e) => setProfileStates((prev) => ({...prev, name: e.target.value})) } />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' className=' bg-amber-500 ml-2 p-1' placeholder='Enter your email' value={profileStates.email} onChange={(e) => setProfileStates((prev) => ({...prev, email: e.target.value}))} />
                        </div>
                        <div>
                            <label>Age</label>
                            <input type='number' className=' bg-amber-500 ml-2 p-1' placeholder='Enter your age' value={profileStates.age} onChange={(e) => setProfileStates((prev) => ({...prev, age: e.target.value}))} />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type='tel' className=' bg-amber-500 ml-2 p-1' placeholder='Enter your phone' value={profileStates.phone} onChange={(e) => setProfileStates((prev) => ({...prev, phone: e.target.value}))} />
                        </div>
                    </div>
                )
            case "Interest":
                return (
                    <div className=' flex flex-col w-1/2 gap-2 p-2'>
                        <div>
                            <label>Fruit</label>
                            <select className='bg-amber-500 ml-2' value={interestStates.fruit} onChange={(e) => setInterestStates((prev) => ({...prev, fruit: e.target.value}))}>
                                <option value="">Select</option>
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="cherry">Cherry</option>
                            </select>
                        </div>
                        <div>
                            <label>Car</label>
                            <select className='bg-amber-500 ml-2' value={interestStates.car} onChange={(e) => setInterestStates((prev) => ({...prev, car: e.target.value}))} >
                                <option value="">Select</option>
                                <option value="Alto">Alto</option>
                                <option value="Creta">Creta</option>
                                <option value="City">City</option>
                            </select>
                        </div>
                        <div>
                            <label>Bike</label>
                            <select className='bg-amber-500 ml-2' value={interestStates.bike} onChange={(e) => setInterestStates((prev) => ({...prev, bike: e.target.value}))}>
                                <option value="">Select</option>
                                <option value="Glamour">Glamour</option>
                                <option value="Pulsar">Pulsar</option>
                                <option value="Apache">Apache</option>
                            </select>
                        </div>
                        <div>
                            <label>Mobile</label>
                            <select className='bg-amber-500 ml-2'  value={interestStates.mobile} onChange={(e) => setInterestStates((prev) => ({...prev, mobile: e.target.value}))}>
                                <option value="">Select</option>
                                <option value="Iphone 16">Iphone 16</option>
                                <option value="Samsung S25">Samsung S25</option>
                                <option value="Nothing Phone 3">Nothing Phone 3</option>
                            </select>
                        </div>
                        <div>
                            <label>Laptop</label>
                            <select className='bg-amber-500 ml-2' value={interestStates.laptop} onChange={(e) => setInterestStates((prev) => ({...prev, laptop: e.target.value}))}>
                                <option value="">Select</option>
                                <option value="Macbook">Macbook</option>
                                <option value="Asus Zenbook">Asus Zenbook</option>
                                <option value="Samsung Notebook">Samsung Notebook</option>
                            </select>
                        </div>
                    </div>
                )
            case "Settings":
                return (
                    <div className='flex flex-col w-1/2 gap-2 p-2'>
                        <div>
                            <label>Cursor Width</label>
                            <input type='number' className=' bg-amber-500 ml-2' value={settingsStates.cursorWidth} onChange={(e) => setSettingsStates((prev) => ({...prev, cursorWidth: e.target.value}))}  />
                        </div>
                        <div>
                            <label>Text Size</label>
                            <input type='number' className=' bg-amber-500 ml-2'  value={settingsStates.textSize} onChange={(e) => setMasterFontSize(e)}  />
                        </div>
                        <div>
                            <label>Theme</label>
                            <select className='bg-amber-500 ml-2'  value={settingsStates.theme} onChange={(e) => setSettingsStates((prev) => ({...prev, theme: e.target.value}))}>
                                <option value="Dark">Dark</option>
                                <option value="Light">Light</option>
                                <option value="System Default">System Default</option>
                            </select>
                        </div>
                        <div>
                            <label>Font</label>
                            <select className='bg-amber-500 ml-2'  value={settingsStates.font} onChange={(e) => setMasterFont(e)}> 
                                {/* setFont   setSettingsStates((prev) => ({...prev, font: e.target.value})) */}
                                <option value="Calibri">Calibri</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Algerian">Algerian</option>
                            </select>
                        </div>
                    </div>
                )
            case "dataPresenter":
                return (
                    <div className='p-2 '>
                        <div className='text-black flex justify-between'>
                            <div>
                                <h1 className='font-bold'>Profile:</h1>
                                {Object.keys(profileStates).map((key) => {
                                    return (
                                        <h1>{key}: {profileStates[key]}</h1>
                                    )
                                })}
                            </div>

                            <div>
                                <h1 className='font-bold'>Interests:</h1>
                                {Object.keys(interestStates).map((key) => {
                                    return (
                                        <h1>{key}: {interestStates[key]}</h1>
                                    )
                                })}
                            </div>

                            <div>
                                <h1 className='font-bold'>Settings:</h1>
                                {Object.keys(settingsStates).map((key) => {
                                    return (
                                        <h1>{key}: {settingsStates[key]}</h1>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
        }
    }

    const submitHandler = () => {
        let errors = [];

        if (!profileStates.name.trim() || profileStates.name.length < 2) {
            errors.push("Name must be at least 2 characters long.");
        }
        if (!profileStates.email.includes("@") || !profileStates.email.includes(".")) {
            errors.push("Enter a valid email address.");
        }
        if (!profileStates.age || isNaN(profileStates.age) || Number(profileStates.age) < 1) {
            errors.push("Age must be a number greater than 0.");
        }
        if (!/^\d{10}$/.test(profileStates.phone)) {
            errors.push("Phone must be a valid 10-digit number.");
        }

        Object.keys(interestStates).forEach((key) => {
            if (!interestStates[key]) {
            errors.push(`${key} must be selected.`);
            }
        });

        if (settingsStates.cursorWidth < 1 || settingsStates.cursorWidth > 50) {
            errors.push("Cursor width must be between 1 and 50.");
        }
        if (settingsStates.textSize < 10 || settingsStates.textSize > 100) {
            errors.push("Text size must be between 10 and 100.");
        }
        if (!settingsStates.theme) {
            errors.push("Theme must be either 'Dark' or 'Light'.");
        }
        if (!settingsStates.font) {
            errors.push("Font must be a valid option.");
        }

        if (errors.length > 0) {
            alert("Validation Errors:\n" + errors.join("\n"));
            return;
        }

        setCurrentTab("dataPresenter");
    };


    const resetHandler = () => {
        setProfileStates(profileInitialState);
        setInterestStates(interestInitialState);
        setSettingsStates(settingsInitialState);
        setCurrentTab("Profile");
    }

    const nextBtnHandler = () => {
        if (currentTab == "Profile") setCurrentTab("Interest");
        if (currentTab == "Interest") setCurrentTab("Settings");
    }

  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
            <div className=' w-1/2 flex justify-start gap-2 mb-2 '>
                <button onClick={(e) => setCurrentTab(e.currentTarget.innerText)} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 rounded-xl cursor-pointer'>Profile</button>
                <button onClick={(e) => setCurrentTab(e.currentTarget.innerText)} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 rounded-xl cursor-pointer'>Interest</button>
                <button onClick={(e) => setCurrentTab(e.currentTarget.innerText)} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 rounded-xl cursor-pointer'>Settings</button>
            </div>
            <div className='flex flex-col w-1/2 h-1/2 bg-amber-100 text-black'>
                <div className=' flex-grow'>
                    {innerContent()}
                </div>
                <div className=' w-full flex justify-end p-2'>
                    {<button onClick={() => nextBtnHandler()} style={{visibility: currentTab=="Profile" || currentTab=="Interest" ? 'visible' : 'hidden'}} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 w-fit rounded-xl cursor-pointer'><ArrowBigRight /></button> }
                </div>
            </div>
            <div className=' flex flex-col mt-2 items-end w-1/2'>
                {<button onClick={() => submitHandler()} style={{visibility: currentTab=="Settings" ? 'visible' : 'hidden'}} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 w-fit rounded-xl cursor-pointer'>Submit</button> }
                {<button onClick={() => resetHandler()} style={{visibility: currentTab=="dataPresenter" ? 'visible' : 'hidden'}} className=' bg-amber-600 active:scale-95 hover:bg-amber-700 p-1 w-fit rounded-xl cursor-pointer'>Reset</button> }
            </div>
    </div>
  )
}

export default WorkSpace4