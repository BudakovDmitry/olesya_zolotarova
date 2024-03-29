'use client'

import {motion} from "framer-motion"

const StepsIntensiveSection = () => {
    return (
        <section id='steps_intensive' className="steps_intensive_section">
            <div className="container">
                <motion.h2
                    initial={{x: -300, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ease: 'easeOut', duration: 1}}
                    viewport={{once: true}}
                    className="title_section title_section-dark steps_intensive_section__title_section"
                >
                    За <span
                    className="title_section__green">10</span> дней интенсива Вы:
                </motion.h2>
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1.5}}
                    viewport={{once: true}}
                    className="title_section title_section-dark steps_intensive_section__title_section_mobile"
                >
                    За <span
                    className="title_section__green">10</span> дней интенсива Вы:
                </motion.h2>
            </div>
            <ul className="steps_intensive_section__list">
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <li className="steps_intensive_section__list_item">
                        <div className="container steps_intensive_section__list_item_container">
                            <div className="steps_intensive_section__list_item_number">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon desktop' width="23"
                                     height="37" viewBox="0 0 23 37"
                                     fill="none">
                                    <path
                                        d="M8.74786 7.76425C8.74786 5.78325 8.55128 4.34542 8.15812 3.45078C7.76496 2.55613 6.97863 1.94905 5.79914 1.62953C4.68518 1.31002 2.85043 1.15026 0.294872 1.15026C0.0982905 1.15026 0 0.958548 0 0.575128C0 0.191709 0.0982905 0 0.294872 0C2.19516 0 3.70228 0.0319512 4.81624 0.0958537L11.5 0.19171L18.0855 0.0958537C19.1994 0.0319512 20.7393 0 22.7051 0C22.9017 0 23 0.191709 23 0.575128C23 0.958548 22.9017 1.15026 22.7051 1.15026C20.2806 1.15026 18.4786 1.34197 17.2991 1.72539C16.1852 2.0449 15.3989 2.65199 14.9402 3.54663C14.4815 4.44128 14.2521 5.84715 14.2521 7.76425V29.2358C14.2521 31.2168 14.4487 32.6546 14.8419 33.5492C15.235 34.4439 15.9886 35.0509 17.1026 35.3705C18.2821 35.69 20.1496 35.8497 22.7051 35.8497C22.9017 35.8497 23 36.0415 23 36.4249C23 36.8083 22.9017 37 22.7051 37C20.8048 37 19.2977 36.968 18.1838 36.9041L11.5 36.8083L4.91453 36.9041C3.80057 36.968 2.26068 37 0.294872 37C0.0982905 37 0 36.8083 0 36.4249C0 36.0415 0.0982905 35.8497 0.294872 35.8497C2.71937 35.8497 4.4886 35.69 5.60256 35.3705C6.78205 34.987 7.60114 34.348 8.05983 33.4534C8.51852 32.5587 8.74786 31.1529 8.74786 29.2358V7.76425Z"
                                        fill="#496E0D"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon mobile' width="13"
                                     height="22" viewBox="0 0 13 22"
                                     fill="none">
                                    <path
                                        d="M4.94444 4.61658C4.94444 3.43869 4.83333 2.58376 4.61111 2.05181C4.38889 1.51986 3.94444 1.15889 3.27778 0.968911C2.64815 0.778929 1.61111 0.683938 0.166667 0.683938C0.0555555 0.683938 0 0.569948 0 0.341968C0 0.113989 0.0555555 0 0.166667 0C1.24074 0 2.09259 0.018998 2.72222 0.0569941L6.5 0.11399L10.2222 0.0569941C10.8519 0.018998 11.7222 0 12.8333 0C12.9444 0 13 0.113989 13 0.341968C13 0.569948 12.9444 0.683938 12.8333 0.683938C11.463 0.683938 10.4444 0.797927 9.77778 1.02591C9.14815 1.21589 8.7037 1.57686 8.44444 2.10881C8.18518 2.64076 8.05555 3.47668 8.05555 4.61658V17.3834C8.05555 18.5613 8.16667 19.4162 8.38889 19.9482C8.61111 20.4801 9.03704 20.8411 9.66667 21.0311C10.3333 21.2211 11.3889 21.3161 12.8333 21.3161C12.9444 21.3161 13 21.4301 13 21.658C13 21.886 12.9444 22 12.8333 22C11.7593 22 10.9074 21.981 10.2778 21.943L6.5 21.886L2.77778 21.943C2.14815 21.981 1.27778 22 0.166667 22C0.0555555 22 0 21.886 0 21.658C0 21.4301 0.0555555 21.3161 0.166667 21.3161C1.53704 21.3161 2.53704 21.2211 3.16667 21.0311C3.83333 20.8031 4.2963 20.4231 4.55556 19.8912C4.81481 19.3592 4.94444 18.5233 4.94444 17.3834V4.61658Z"
                                        fill="#496E0D"/>
                                </svg>
                            </div>
                            <p className="steps_intensive_section__list_item_text">научитесь с легкостью формировать
                                здоровый рацион</p>
                        </div>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <li className="steps_intensive_section__list_item">
                        <div className="container steps_intensive_section__list_item_container">
                            <div className="steps_intensive_section__list_item_number">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon desktop' width="33"
                                     height="40" viewBox="0 0 33 40"
                                     fill="none">
                                    <path
                                        d="M0.222973 38.5366C5.94595 33.8537 10.3682 30.0488 13.4899 27.122C16.6115 24.1301 18.8552 21.4634 20.2209 19.122C21.5866 16.7805 22.2694 14.439 22.2694 12.0976C22.2694 9.49594 21.4565 7.38212 19.8307 5.7561C18.2698 4.06504 16.2213 3.21951 13.685 3.21951C8.5473 3.21951 4.84037 7.25203 2.56419 15.3171C2.56419 15.3821 2.43412 15.4146 2.17399 15.4146C1.58868 15.4146 1.32855 15.2846 1.39358 15.0244L5.19806 0.195122C5.19806 0.0650408 5.32813 0 5.58826 0C5.78336 0 5.94595 0.0650408 6.07601 0.195122C6.27111 0.260164 6.33615 0.325205 6.27112 0.390245C6.20608 0.650408 6.17356 1.00813 6.17356 1.46342C6.17356 2.50407 6.66132 3.02439 7.63682 3.02439C8.22213 3.02439 9.19764 2.79675 10.5633 2.34147C13.2297 1.49594 15.6035 1.07317 17.6845 1.07317C21.0013 1.07317 23.6026 1.98374 25.4886 3.80488C27.4396 5.56098 28.4151 7.86992 28.4151 10.7317C28.4151 13.0081 27.6672 15.2846 26.1715 17.561C24.7407 19.8374 22.5946 22.2764 19.7331 24.8781C16.9367 27.4146 13.0021 30.6341 7.92948 34.5366C7.66934 34.7317 7.57179 34.8943 7.63682 35.0244C7.76689 35.1545 7.99451 35.2195 8.31968 35.2195C15.4734 35.2195 20.4485 35.122 23.2449 34.9268C26.0414 34.7317 28.0574 34.2114 29.2931 33.3659C30.5287 32.5203 31.3742 31.0244 31.8294 28.878C31.8294 28.748 31.992 28.6829 32.3171 28.6829C32.7724 28.6829 33 28.7805 33 28.9756L31.5367 38.9268C31.5367 39.187 31.4392 39.4472 31.2441 39.7073C31.114 39.9024 30.9189 40 30.6588 40H0.905828C0.580659 40 0.320524 39.8374 0.125422 39.5122C-0.0696791 39.122 -0.0371622 38.7967 0.222973 38.5366Z"
                                        fill="#496E0D"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon mobile' width="19"
                                     height="23" viewBox="0 0 19 23"
                                     fill="none">
                                    <path
                                        d="M0.128378 22.1585C3.42342 19.4659 5.96959 17.278 7.76689 15.5951C9.56419 13.8748 10.856 12.3415 11.6423 10.9951C12.4286 9.64878 12.8218 8.30244 12.8218 6.9561C12.8218 5.46016 12.3537 4.24472 11.4177 3.30976C10.519 2.3374 9.33953 1.85122 7.87922 1.85122C4.92117 1.85122 2.78688 4.16992 1.47635 8.80732C1.47635 8.84472 1.40146 8.86342 1.25169 8.86342C0.914696 8.86342 0.764921 8.78862 0.802365 8.63902L2.99282 0.112195C2.99282 0.0373985 3.06771 0 3.21748 0C3.32981 0 3.42342 0.0373985 3.49831 0.112195C3.61064 0.149594 3.64809 0.186993 3.61064 0.224391C3.5732 0.373984 3.55448 0.579676 3.55448 0.841464C3.55448 1.43984 3.8353 1.73903 4.39696 1.73903C4.73395 1.73903 5.29561 1.60813 6.08193 1.34634C7.61712 0.860163 8.98381 0.617074 10.182 0.617074C12.0916 0.617074 13.5894 1.14065 14.6753 2.1878C15.7986 3.19756 16.3602 4.5252 16.3602 6.17073C16.3602 7.47968 15.9296 8.78862 15.0684 10.0976C14.2447 11.4065 13.009 12.8089 11.3615 14.3049C9.75141 15.7634 7.48606 17.6146 4.56546 19.8585C4.41568 19.9707 4.35952 20.0642 4.39696 20.139C4.47185 20.2138 4.6029 20.2512 4.79012 20.2512C8.90892 20.2512 11.7734 20.1951 13.3834 20.0829C14.9935 19.9707 16.1543 19.6715 16.8657 19.1854C17.5771 18.6992 18.0639 17.839 18.326 16.6049C18.326 16.5301 18.4196 16.4927 18.6068 16.4927C18.8689 16.4927 19 16.5488 19 16.661L18.1575 22.3829C18.1575 22.5325 18.1014 22.6821 17.989 22.8317C17.9141 22.9439 17.8018 23 17.652 23H0.521537C0.334319 23 0.184544 22.9065 0.0722129 22.7195C-0.0401182 22.4951 -0.0213964 22.3081 0.128378 22.1585Z"
                                        fill="#496E0D"/>
                                </svg>
                            </div>
                            <p className="steps_intensive_section__list_item_text">Разберетесь с психологическими и
                                физиологическими причинами лишнего веса</p>
                        </div>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <li className="steps_intensive_section__list_item">
                        <div className="container steps_intensive_section__list_item_container">
                            <div className="steps_intensive_section__list_item_number">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon desktop' width="26"
                                     height="55" viewBox="0 0 26 55"
                                     fill="none">
                                    <path
                                        d="M14.8959 22.3491C18.515 22.7243 21.2568 23.9838 23.1212 26.1276C25.0404 28.2714 26 30.7636 26 33.6041C26 36.2303 25.1226 38.91 23.3679 41.6433C21.6132 44.4303 18.9263 47.0029 15.3072 49.361C11.7429 51.7192 7.35611 53.595 2.14679 54.9885C1.92745 55.0421 1.73553 54.9081 1.57102 54.5865C1.46135 54.3186 1.51619 54.1578 1.73553 54.1042C8.31572 52.1212 13.0041 49.3074 15.8007 45.663C18.6521 42.0185 20.0778 38.2937 20.0778 34.4884C20.0778 31.5943 19.3101 29.1557 17.7748 27.1727C16.2394 25.1897 13.9089 24.1982 10.7833 24.1982C9.24792 24.1982 7.93188 24.3589 6.83518 24.6805C6.67067 24.7341 6.53359 24.6001 6.42392 24.2786C6.31425 23.957 6.34166 23.7694 6.50617 23.7158C10.7833 22.6439 13.7992 21.1432 15.5539 19.2138C17.3635 17.2844 18.2683 14.6582 18.2683 11.3354C18.2683 8.60201 17.6651 6.4582 16.4587 4.90395C15.3072 3.34969 13.525 2.57256 11.1123 2.57256C6.23199 2.57256 2.85964 5.76147 0.995255 12.1393C0.94042 12.1929 0.83075 12.2197 0.666245 12.2197C0.17273 12.2197 -0.0466097 12.1125 0.00822522 11.8981L3.05157 0.160785C3.16124 0.0535951 3.27091 0 3.38058 0C3.54508 0 3.70959 0.0535951 3.87409 0.160785C4.0386 0.21438 4.09343 0.267974 4.0386 0.321568C3.92893 0.75033 3.87409 1.0451 3.87409 1.20589C3.87409 2.117 4.34019 2.57256 5.27238 2.57256C5.7659 2.57256 6.58842 2.38498 7.73996 2.00981C9.98819 1.20589 12.0171 0.803925 13.8266 0.803925C16.8974 0.803925 19.2827 1.71504 20.9826 3.53727C22.6825 5.30591 23.5324 7.44971 23.5324 9.96868C23.5324 12.5948 22.7647 15.0602 21.2294 17.3648C19.694 19.6158 17.5828 21.2772 14.8959 22.3491Z"
                                        fill="#496E0D"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon mobile' width="15"
                                     height="32" viewBox="0 0 15 32"
                                     fill="none">
                                    <path
                                        d="M8.5938 13.0031C10.6817 13.2214 12.2635 13.9542 13.3391 15.2015C14.4464 16.4488 15 17.8988 15 19.5515C15 21.0794 14.4938 22.6385 13.4815 24.2289C12.4692 25.8504 10.919 27.3471 8.83107 28.7191C6.77476 30.0912 4.24391 31.1826 1.23853 31.9933C1.11199 32.0245 1.00127 31.9465 0.906359 31.7594C0.843088 31.6035 0.874723 31.51 1.00127 31.4788C4.79753 30.325 7.50237 28.688 9.11579 26.5676C10.7608 24.4471 11.5834 22.2799 11.5834 20.066C11.5834 18.3821 11.1405 16.9633 10.2547 15.8096C9.36887 14.6558 8.02436 14.0789 6.22113 14.0789C5.33534 14.0789 4.57608 14.1725 3.94337 14.3596C3.84847 14.3908 3.76938 14.3128 3.70611 14.1257C3.64283 13.9386 3.65865 13.8295 3.75356 13.7983C6.22113 13.1746 7.96109 12.3015 8.97343 11.179C10.0174 10.0564 10.5394 8.52843 10.5394 6.59511C10.5394 5.0048 10.1914 3.7575 9.49541 2.8532C8.83107 1.94891 7.80291 1.49676 6.41095 1.49676C3.59538 1.49676 1.64979 3.35213 0.574185 7.06285C0.54255 7.09403 0.479279 7.10963 0.384372 7.10963C0.0996521 7.10963 -0.0268902 7.04726 0.00474532 6.92253L1.76052 0.0935479C1.82379 0.0311826 1.88706 0 1.95033 0C2.04524 0 2.14015 0.0311826 2.23505 0.0935479C2.32996 0.12473 2.36159 0.155912 2.32996 0.187094C2.26669 0.436555 2.23505 0.60806 2.23505 0.701607C2.23505 1.23171 2.50395 1.49676 3.04176 1.49676C3.32648 1.49676 3.80101 1.38762 4.46536 1.16935C5.76242 0.701608 6.93293 0.467738 7.97691 0.467738C9.7485 0.467738 11.1246 0.997842 12.1053 2.05805C13.086 3.08707 13.5764 4.33438 13.5764 5.79996C13.5764 7.3279 13.1335 8.7623 12.2477 10.1032C11.3619 11.4128 10.1439 12.3795 8.5938 13.0031Z"
                                        fill="#496E0D"/>
                                </svg>
                            </div>
                            <p className="steps_intensive_section__list_item_text">Узнаете что нужно сделать, чтобы
                                изменить свои привычки и получить фигуру своей мечты раз и навсегда</p>
                        </div>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <li className="steps_intensive_section__list_item">
                        <div className="container steps_intensive_section__list_item_container">
                            <div className="steps_intensive_section__list_item_number">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon desktop' width="32"
                                     height="47" viewBox="0 0 32 47"
                                     fill="none">
                                    <path
                                        d="M31.6786 28.2959C31.8929 28.2959 32 28.8022 32 29.8146C32 30.2409 31.9464 30.6672 31.8393 31.0935C31.7857 31.5198 31.7054 31.733 31.5983 31.733C29.9914 31.6264 27.7418 31.5198 24.8494 31.4133V44.0425C24.8494 44.6287 24.6351 45.0017 24.2066 45.1616L20.8321 46.8401C20.5108 46.9467 20.3501 47 20.3501 47C20.1894 47 20.109 46.7868 20.109 46.3605V31.3333C16.7346 31.2268 10.2802 31.1735 0.746054 31.1735C0.47824 31.1735 0.263988 31.0669 0.1033 30.8537C-0.0573888 30.6406 -0.0306074 30.4274 0.183644 30.2143L23.6442 0.159864C23.7513 0.0532881 23.912 0 24.1263 0C24.2869 0 24.4476 0.0532881 24.6083 0.159864C24.769 0.213153 24.8494 0.319729 24.8494 0.479593V28.4558C26.0813 28.4558 28.3577 28.4025 31.6786 28.2959ZM4.68293 28.7755C9.28934 28.7755 14.4314 28.7222 20.109 28.6156V8.07313L4.28121 28.216C4.12052 28.3758 4.06695 28.5091 4.12052 28.6156C4.22764 28.7222 4.41511 28.7755 4.68293 28.7755Z"
                                        fill="#496E0D"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon mobile' width="20"
                                     height="29" viewBox="0 0 20 29"
                                     fill="none">
                                    <path
                                        d="M19.7991 17.4592C19.933 17.4592 20 17.7715 20 18.3963C20 18.6593 19.9665 18.9223 19.8996 19.1854C19.8661 19.4484 19.8159 19.5799 19.7489 19.5799C18.7446 19.5142 17.3386 19.4484 15.5308 19.3827V27.1752C15.5308 27.5368 15.3969 27.767 15.1291 27.8656L13.0201 28.9014C12.8192 28.9671 12.7188 29 12.7188 29C12.6184 29 12.5681 28.8685 12.5681 28.6054V19.3333C10.4591 19.2676 6.42516 19.2347 0.466284 19.2347C0.2989 19.2347 0.164993 19.1689 0.0645624 19.0374C-0.035868 18.9059 -0.0191296 18.7744 0.114778 18.6429L14.7776 0.0986396C14.8446 0.0328799 14.945 0 15.0789 0C15.1793 0 15.2798 0.0328799 15.3802 0.0986396C15.4806 0.13152 15.5308 0.19728 15.5308 0.295919V17.5578C16.3008 17.5578 17.7236 17.5249 19.7991 17.4592ZM2.92683 17.7551C5.80583 17.7551 9.01961 17.7222 12.5681 17.6565V4.98129L2.67575 17.4099C2.57532 17.5085 2.54185 17.5907 2.57532 17.6565C2.64228 17.7222 2.75945 17.7551 2.92683 17.7551Z"
                                        fill="#496E0D"/>
                                </svg>
                            </div>
                            <p className="steps_intensive_section__list_item_text">Получите лайфхаки как не
                                переедать и не срываться на вредные продукты</p>
                        </div>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: 300}}
                    whileInView={{y: 0}}
                    transition={{type: "spring", bounce: 0.4, duration: 1.5}}
                    viewport={{once: true}}
                >
                    <li className="steps_intensive_section__list_item last">
                        <div className="container steps_intensive_section__list_item_container">
                            <div className="steps_intensive_section__list_item_number">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon desktop' width="25"
                                     height="56" viewBox="0 0 25 56"
                                     fill="none">
                                    <path
                                        d="M5.13166 8.01714C4.40555 8.01714 3.98663 8.39034 3.87493 9.13674L2.1155 18.3335C9.82346 18.3868 15.4927 19.7463 19.1233 22.412C22.7538 25.0244 24.5691 28.6498 24.5691 33.2881C24.5691 36.327 23.7592 39.0727 22.1394 41.5252C20.5196 44.0309 17.9783 46.4301 14.5153 48.7226C11.1081 51.0684 6.55595 53.4942 0.858767 56H0.774985C0.551566 56 0.356074 55.8667 0.18851 55.6001C0.0768003 55.3869 0.132655 55.2269 0.356074 55.1203C7.22621 51.8681 12.0577 48.5627 14.8504 45.2039C17.6431 41.8984 19.0395 38.3796 19.0395 34.6476C19.0395 30.2225 17.4756 26.7838 14.3477 24.3313C11.2198 21.8789 6.72352 20.6526 0.858767 20.6526C0.579493 20.6526 0.356074 20.5727 0.18851 20.4127C0.0209456 20.1995 -0.0349092 19.9595 0.0209455 19.693L2.70198 5.45805C2.75783 5.08485 2.84161 4.87159 2.95332 4.81828C3.06503 4.71165 3.34431 4.63168 3.79114 4.57836C10.8288 3.77865 15.5486 3.21885 17.9503 2.89896C20.3521 2.57908 21.8881 2.25919 22.5583 1.93931C23.2845 1.56611 23.7872 0.97965 24.0664 0.179937C24.1223 0.0199926 24.2898 -0.0333218 24.5691 0.0199933C24.9043 0.0199933 25.0439 0.126621 24.988 0.339877L23.3124 6.25777C23.089 6.84422 22.8097 7.24408 22.4746 7.45734C22.1953 7.61728 21.6926 7.69725 20.9665 7.69725L5.13166 8.01714Z"
                                        fill="#496E0D"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className='steps_intensive_section__list_item_number_icon mobile' width="16"
                                     height="35" viewBox="0 0 16 35"
                                     fill="none">
                                    <path
                                        d="M3.28426 5.01071C2.81955 5.01071 2.55145 5.24396 2.47995 5.71046L1.35392 11.4584C6.28701 11.4917 9.91534 12.3414 12.2389 14.0075C14.5625 15.6402 15.7242 17.9061 15.7242 20.8051C15.7242 22.7044 15.2059 24.4204 14.1692 25.9532C13.1326 27.5193 11.5061 29.0188 9.28977 30.4516C7.1092 31.9178 4.19581 33.4339 0.549611 35H0.49599C0.353002 35 0.227887 34.9167 0.120646 34.7501C0.0491522 34.6168 0.0848992 34.5168 0.227887 34.4502C4.62478 32.4176 7.7169 30.3517 9.50425 28.2524C11.2916 26.1865 12.1853 23.9873 12.1853 21.6548C12.1853 18.8891 11.1844 16.7399 9.18253 15.2071C7.18069 13.6743 4.30305 12.9079 0.549611 12.9079C0.370876 12.9079 0.227887 12.8579 0.120646 12.7579C0.0134052 12.6247 -0.0223419 12.4747 0.0134051 12.3081L1.72926 3.41128C1.76501 3.17803 1.81863 3.04475 1.89013 3.01142C1.96162 2.94478 2.14036 2.8948 2.42633 2.86148C6.93046 2.36166 9.95109 2.01178 11.4882 1.81185C13.0253 1.61192 14.0084 1.412 14.4373 1.21207C14.9021 0.978817 15.2238 0.612281 15.4025 0.11246C15.4383 0.0124953 15.5455 -0.0208262 15.7242 0.0124958C15.9387 0.0124958 16.0281 0.0791383 15.9923 0.212423L14.9199 3.9111C14.7769 4.27764 14.5982 4.52755 14.3837 4.66084C14.205 4.7608 13.8833 4.81078 13.4186 4.81078L3.28426 5.01071Z"
                                        fill="#496E0D"/>
                                </svg>
                            </div>
                            <p className="steps_intensive_section__list_item_text">Получите необходимые знания о
                                функционировании организма и пищеварительной системы</p>
                        </div>
                    </li>
                </motion.div>
            </ul>
        </section>
    )
}

export default StepsIntensiveSection;