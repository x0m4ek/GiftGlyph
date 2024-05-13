import React, { useState } from 'react';
import "./Navbar.scss";
import Logo from "../../images/logo.png";
import Flag from "../../images/flag.png";

function Navbar() {
    const [menuState, setMenuState] = useState(false);


  return (
    <>
        <div className="navbar">
                <div className="conteiner">
                        <div className="top-sec">
                
                        <div className="socials">
                            <div className="facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#1D1D1D"/>
                                </svg>

                            </div>
                            <div className="insta">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#1D1D1D"/>
                                </svg>

                            </div>
                            <div className="twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="#1D1D1D"/>
                                </svg>

                            </div>
                            <div className="pinterest">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.67 15.0972C10.164 17.8232 9.54802 20.4372 7.72002 21.8022C7.15702 17.6822 8.54902 14.5872 9.19502 11.3022C8.09302 9.39219 9.32802 5.54719 11.652 6.49419C14.512 7.66019 9.17502 13.5962 12.758 14.3382C16.499 15.1122 18.027 7.65519 15.707 5.22919C12.355 1.72819 5.95002 5.15019 6.73802 10.1632C6.93002 11.3892 8.15902 11.7612 7.22902 13.4532C5.08402 12.9622 4.44402 11.2202 4.52702 8.89719C4.65902 5.09719 7.84402 2.43519 11.038 2.06719C15.078 1.60119 18.869 3.59419 19.392 7.50719C19.982 11.9232 17.569 16.7072 13.25 16.3622C12.079 16.2692 11.587 15.6722 10.67 15.0972Z" fill="#1D1D1D"/>
                                </svg>

                            </div>
                        </div>

                        <div className="logo">
                            <a href="/"> <img src={Logo} alt="Reload" /></a>
                         
                        </div>
                        <div className="nav">
                            <div className="search">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <div className="profile">
                            <a href="/profile">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12ZM12 13.5C10.4087 13.5 8.88258 12.8679 7.75736 11.7426C6.63214 10.6174 6 9.0913 6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 9.0913 17.3679 10.6174 16.2426 11.7426C15.1174 12.8679 13.5913 13.5 12 13.5ZM19.5 21V18.75C19.5 18.1533 19.2629 17.581 18.841 17.159C18.419 16.7371 17.8467 16.5 17.25 16.5H6.75C6.15326 16.5 5.58097 16.7371 5.15901 17.159C4.73705 17.581 4.5 18.1533 4.5 18.75V21C4.5 21.1989 4.42098 21.3897 4.28033 21.5303C4.13968 21.671 3.94891 21.75 3.75 21.75C3.55109 21.75 3.36032 21.671 3.21967 21.5303C3.07902 21.3897 3 21.1989 3 21V18.75C3 17.7554 3.39509 16.8016 4.09835 16.0983C4.80161 15.3951 5.75544 15 6.75 15H17.25C18.2446 15 19.1984 15.3951 19.9016 16.0983C20.6049 16.8016 21 17.7554 21 18.75V21C21 21.1989 20.921 21.3897 20.7803 21.5303C20.6397 21.671 20.4489 21.75 20.25 21.75C20.0511 21.75 19.8603 21.671 19.7197 21.5303C19.579 21.3897 19.5 21.1989 19.5 21Z" fill="#1D1D1D"/>
                                </svg>
                            </a>
                            </div>
                            <div className="cart">
                                <a href="/cart">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57463 16.9922H20.2969C20.6882 16.9922 21.0298 16.6708 21.0298 16.2388C21.0298 15.8068 20.6882 15.4853 20.2969 15.4853H8.7452C8.17263 15.4853 7.8212 15.0833 7.73077 14.4709L7.57006 13.4162H20.3166C21.7832 13.4162 22.5366 12.5119 22.7475 11.0758L23.5511 5.76192C23.5724 5.63573 23.5858 5.50834 23.5913 5.38049C23.5913 4.89835 23.2296 4.56663 22.6772 4.56663H6.27449L6.08335 3.2912C5.98306 2.51763 5.70192 2.12549 4.67763 2.12549H1.15135C0.749775 2.12549 0.408203 2.47777 0.408203 2.87977C0.408203 3.2912 0.749775 3.64306 1.15177 3.64306H4.54649L6.15363 14.6719C6.36492 16.0982 7.11792 16.9922 8.57463 16.9922ZM21.8835 6.08335L21.1712 10.8949C21.0906 11.5176 20.7593 11.8995 20.1666 11.8995L7.34977 11.9093L6.49563 6.08335H21.8835ZM9.36835 21.8741C9.58254 21.8758 9.79494 21.8349 9.99317 21.7538C10.1914 21.6726 10.3715 21.5528 10.523 21.4014C10.6744 21.2499 10.7942 21.0698 10.8754 20.8716C10.9565 20.6734 10.9974 20.461 10.9956 20.2468C10.9965 20.0328 10.9551 19.8208 10.8736 19.623C10.7922 19.4251 10.6723 19.2454 10.521 19.0941C10.3697 18.9428 10.19 18.823 9.99215 18.7415C9.79431 18.6601 9.5823 18.6186 9.36835 18.6195C8.45463 18.6195 7.7312 19.3429 7.7312 20.2468C7.7312 21.1609 8.45463 21.8741 9.36835 21.8741ZM18.7601 21.8741C19.6742 21.8741 20.3972 21.1609 20.3972 20.2468C20.3972 19.3425 19.6742 18.6195 18.7601 18.6195C17.8562 18.6195 17.1229 19.3429 17.1229 20.2468C17.1229 21.1609 17.8562 21.8741 18.7601 21.8741Z" fill="#1D1D1D"/>
                                </svg>

                                </a>
                              
                            </div>
                            <div className="menu" onClick={() => setMenuState(!menuState)}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="6" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="18" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                </svg>

                            </div>
                            <div className="flag">
                                <img src={Flag} alt="Reload" />
                            </div>
                        
                        </div>
                                
                </div>
                <div  className={`second-sec ${menuState ? "active" : ""}`}>
                    <div className={`menu ${menuState ? "active" : ""}`}>
                        <ul>
                            <li><a href="/shop">Shop all </a><svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 0H0.5L6.5 6L12.5 0H6.5Z" fill="#545454"/>
</svg>
</li>
                            <li><a href="/buycredits">Buy Credits</a><svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 0H0.5L6.5 6L12.5 0H6.5Z" fill="#545454"/>
</svg>
</li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/blogs">Blog</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                        <div className="nav">
                            <div className="search">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <div className="profile">
                            <a href="/profile">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12ZM12 13.5C10.4087 13.5 8.88258 12.8679 7.75736 11.7426C6.63214 10.6174 6 9.0913 6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 9.0913 17.3679 10.6174 16.2426 11.7426C15.1174 12.8679 13.5913 13.5 12 13.5ZM19.5 21V18.75C19.5 18.1533 19.2629 17.581 18.841 17.159C18.419 16.7371 17.8467 16.5 17.25 16.5H6.75C6.15326 16.5 5.58097 16.7371 5.15901 17.159C4.73705 17.581 4.5 18.1533 4.5 18.75V21C4.5 21.1989 4.42098 21.3897 4.28033 21.5303C4.13968 21.671 3.94891 21.75 3.75 21.75C3.55109 21.75 3.36032 21.671 3.21967 21.5303C3.07902 21.3897 3 21.1989 3 21V18.75C3 17.7554 3.39509 16.8016 4.09835 16.0983C4.80161 15.3951 5.75544 15 6.75 15H17.25C18.2446 15 19.1984 15.3951 19.9016 16.0983C20.6049 16.8016 21 17.7554 21 18.75V21C21 21.1989 20.921 21.3897 20.7803 21.5303C20.6397 21.671 20.4489 21.75 20.25 21.75C20.0511 21.75 19.8603 21.671 19.7197 21.5303C19.579 21.3897 19.5 21.1989 19.5 21Z" fill="#1D1D1D"/>
                                </svg>
                            </a>
                            </div>
                            <div className="cart">
                            <a href="/cart">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57463 16.9922H20.2969C20.6882 16.9922 21.0298 16.6708 21.0298 16.2388C21.0298 15.8068 20.6882 15.4853 20.2969 15.4853H8.7452C8.17263 15.4853 7.8212 15.0833 7.73077 14.4709L7.57006 13.4162H20.3166C21.7832 13.4162 22.5366 12.5119 22.7475 11.0758L23.5511 5.76192C23.5724 5.63573 23.5858 5.50834 23.5913 5.38049C23.5913 4.89835 23.2296 4.56663 22.6772 4.56663H6.27449L6.08335 3.2912C5.98306 2.51763 5.70192 2.12549 4.67763 2.12549H1.15135C0.749775 2.12549 0.408203 2.47777 0.408203 2.87977C0.408203 3.2912 0.749775 3.64306 1.15177 3.64306H4.54649L6.15363 14.6719C6.36492 16.0982 7.11792 16.9922 8.57463 16.9922ZM21.8835 6.08335L21.1712 10.8949C21.0906 11.5176 20.7593 11.8995 20.1666 11.8995L7.34977 11.9093L6.49563 6.08335H21.8835ZM9.36835 21.8741C9.58254 21.8758 9.79494 21.8349 9.99317 21.7538C10.1914 21.6726 10.3715 21.5528 10.523 21.4014C10.6744 21.2499 10.7942 21.0698 10.8754 20.8716C10.9565 20.6734 10.9974 20.461 10.9956 20.2468C10.9965 20.0328 10.9551 19.8208 10.8736 19.623C10.7922 19.4251 10.6723 19.2454 10.521 19.0941C10.3697 18.9428 10.19 18.823 9.99215 18.7415C9.79431 18.6601 9.5823 18.6186 9.36835 18.6195C8.45463 18.6195 7.7312 19.3429 7.7312 20.2468C7.7312 21.1609 8.45463 21.8741 9.36835 21.8741ZM18.7601 21.8741C19.6742 21.8741 20.3972 21.1609 20.3972 20.2468C20.3972 19.3425 19.6742 18.6195 18.7601 18.6195C17.8562 18.6195 17.1229 19.3429 17.1229 20.2468C17.1229 21.1609 17.8562 21.8741 18.7601 21.8741Z" fill="#1D1D1D"/>
                                </svg>
                            </a>
                            </div>
                            <div className="menu">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="6" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="18" cy="12.5" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                                </svg>

                            </div>
                            <div className="flag">
                                <img src={Flag} alt="Reload" />
                            </div>
                        
                        </div>
                    </div>
                 
                                
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar