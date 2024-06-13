import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Assets/logo.png'
import './sidebar.css'

function Sidebar() {

    // Initializing state variable
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                sidebarOpen && ref.current && !ref.current.contains(e.target)
            ) {
                setSidebarOpen(false);
            }
        };

        // Closes the sidebar when a click outside the sidebar is detected
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {

            //Cleanup the event listener
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen]);


    // Defining an user
    const user = null;

    return (
        <div>
            <nav ref={ref} className='navbar-small-screens flex flex-wrap items-center justify-center pt-4 pb-4 w-full'>
                <div className='nav-main-small grid'>
                    <div className='logo-and-toggle flex items-center justify-start pl-3'>
                        <button className='toggle border-0 z-50' onClick={() => setSidebarOpen((prev) => !prev)}>
                            {sidebarOpen ? (
                                <i class='bi bi-x-lg text-2xl'></i>
                            ) : (
                                <i class="bi bi-list text-2xl"></i>
                            )}
                        </button>

                        <div className={`sidemenu${sidebarOpen ? ' show-menu' : ''}`}>
                            {user ? (
                                <div className='profile'>
                                    <div className='sidebar-user-photo'>
                                        <img src={user.photo} alt='' />
                                    </div>
                                    <div className='sidebar-user-details'>
                                        <div className='sidebar-username'>
                                            <p>{user.username}</p>
                                        </div>
                                        <div className='sidebar-user-email'>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            ) : ""}
                            <p>Internships</p>
                            <p>Jobs</p>
                            <p className='courses'>Courses <span className='offer-text'>OFFER</span></p>
                            <p>Placement Guarantee Courses</p>
                            <p>Study Abroad</p>
                            <p>Study in India</p>
                            <p>Online Degrees</p>
                            {user ? (
                                <>
                                    <p>PepsiCo community impact initiative</p>
                                </>
                            ) : (
                                <>
                                    <p>Contact Us</p>
                                    <p>Get our App</p>
                                </>
                            )}
                            <hr></hr>
                            {user ? (
                                <>
                                    <p>My Applications</p>
                                    <p>My Bookmarks</p>
                                    <p>Edit Resume</p>
                                    <p>Edit Preferences</p>
                                    <p>More</p>
                                </>
                            ) : (
                                <>
                                    <p>Register - As a Student</p>
                                    <p>Register - As an Employer</p>
                                    <p>Login</p>
                                </>
                            )}
                        </div>

                        <div className='nav-logo-small'>
                            <img className='w-auto h-12' src={logo} alt='InternQuest logo'></img>
                        </div>
                    </div>
                    <div className='user-auth-small flex items-center justify-end pr-3'>
                        <button className='register cursor-pointer w-fit h-auto items-center justify-center'>Register <i class="bi bi-caret-down-fill"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar