'use client'

import {motion} from "framer-motion"

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: "easeOut", duration: 1.5}}
                viewport={{once: true}}
            >
                <div className="container footer__container">
                    <div className="footer__left">
                        <div className="footer__logo"><a className='footer__logo_link' href="#header">Олеся Золотарева</a>
                        </div>
                        <div className="footer__nav">
                            <a href="#about_me" className="footer__nav_item">Обо мне</a>
                            <span className='footer__nav_separator'>/</span>
                            <a href="#about_intensive" className="footer__nav_item">Про интенсив</a>
                            <span className='footer__nav_separator'>/</span>
                            <a href="#tariffs" className="footer__nav_item">Тарифы</a>
                            <span className='footer__nav_separator'>/</span>
                        </div>
                    </div>
                    <div className="footer__center">
                        <p className="footer__social_text">Мои соц. сети</p>
                        <div className="footer__social_link_container">
                            <a href='#' className="footer__social_link instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer__social_link_icon' width="18"
                                     height="18" viewBox="0 0 18 18"
                                     fill="none">
                                    <path
                                        d="M9 1.62651C11.3855 1.62651 11.7108 1.62651 12.6867 1.62651C13.5542 1.62651 13.988 1.84337 14.3133 1.95181C14.747 2.16868 15.0723 2.27711 15.3976 2.60241C15.7229 2.92771 15.9398 3.25301 16.0482 3.68675C16.1566 4.01205 16.2651 4.44578 16.3735 5.31325C16.3735 6.28916 16.3735 6.50602 16.3735 9C16.3735 11.494 16.3735 11.7108 16.3735 12.6867C16.3735 13.5542 16.1566 13.988 16.0482 14.3133C15.8313 14.747 15.7229 15.0723 15.3976 15.3976C15.0723 15.7229 14.747 15.9398 14.3133 16.0482C13.988 16.1566 13.5542 16.2651 12.6867 16.3735C11.7108 16.3735 11.494 16.3735 9 16.3735C6.50602 16.3735 6.28916 16.3735 5.31325 16.3735C4.44578 16.3735 4.01205 16.1566 3.68675 16.0482C3.25301 15.8313 2.92771 15.7229 2.60241 15.3976C2.27711 15.0723 2.06024 14.747 1.95181 14.3133C1.84337 13.988 1.73494 13.5542 1.62651 12.6867C1.62651 11.7108 1.62651 11.494 1.62651 9C1.62651 6.50602 1.62651 6.28916 1.62651 5.31325C1.62651 4.44578 1.84337 4.01205 1.95181 3.68675C2.16868 3.25301 2.27711 2.92771 2.60241 2.60241C2.92771 2.27711 3.25301 2.06024 3.68675 1.95181C4.01205 1.84337 4.44578 1.73494 5.31325 1.62651C6.28916 1.62651 6.61446 1.62651 9 1.62651ZM9 0C6.50602 0 6.28916 0 5.31325 0C4.33735 0 3.68675 0.216868 3.14458 0.433736C2.60241 0.650603 2.06024 0.975904 1.51807 1.51807C0.975904 2.06024 0.759037 2.49398 0.433736 3.14458C0.216868 3.68675 0.108434 4.33735 0 5.31325C0 6.28916 0 6.61446 0 9C0 11.494 0 11.7108 0 12.6867C0 13.6627 0.216868 14.3133 0.433736 14.8554C0.650603 15.3976 0.975904 15.9398 1.51807 16.4819C2.06024 17.0241 2.49398 17.241 3.14458 17.5663C3.68675 17.7831 4.33735 17.8916 5.31325 18C6.28916 18 6.61446 18 9 18C11.3855 18 11.7108 18 12.6867 18C13.6627 18 14.3133 17.7831 14.8554 17.5663C15.3976 17.3494 15.9398 17.0241 16.4819 16.4819C17.0241 15.9398 17.241 15.506 17.5663 14.8554C17.7831 14.3133 17.8916 13.6627 18 12.6867C18 11.7108 18 11.3855 18 9C18 6.61446 18 6.28916 18 5.31325C18 4.33735 17.7831 3.68675 17.5663 3.14458C17.3494 2.60241 17.0241 2.06024 16.4819 1.51807C15.9398 0.975904 15.506 0.759037 14.8554 0.433736C14.3133 0.216868 13.6627 0.108434 12.6867 0C11.7108 0 11.494 0 9 0Z"
                                        fill="#F3F3F3"/>
                                    <path
                                        d="M9 4.33735C6.39759 4.33735 4.33735 6.39759 4.33735 9C4.33735 11.6024 6.39759 13.6627 9 13.6627C11.6024 13.6627 13.6627 11.6024 13.6627 9C13.6627 6.39759 11.6024 4.33735 9 4.33735ZM9 12.0361C7.3735 12.0361 5.96386 10.7349 5.96386 9C5.96386 7.3735 7.26506 5.96386 9 5.96386C10.6265 5.96386 12.0361 7.26506 12.0361 9C12.0361 10.6265 10.6265 12.0361 9 12.0361Z"
                                        fill="#F3F3F3"/>
                                    <path
                                        d="M13.7711 5.31325C14.3699 5.31325 14.8554 4.82778 14.8554 4.22892C14.8554 3.63005 14.3699 3.14458 13.7711 3.14458C13.1722 3.14458 12.6867 3.63005 12.6867 4.22892C12.6867 4.82778 13.1722 5.31325 13.7711 5.31325Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </a>
                            <a href='#' className="footer__social_link telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" className='footer__social_link_icon' width="18"
                                     height="16" viewBox="0 0 18 16"
                                     fill="none">
                                    <path
                                        d="M1.23741 6.88796C6.06923 4.63001 9.29121 3.14143 10.9033 2.42222C15.5063 0.368731 16.4627 0.0120186 17.0861 0.000114193C17.2232 -0.00235084 17.5298 0.0340956 17.7284 0.206929C17.8961 0.352865 17.9422 0.550006 17.9643 0.68837C17.9864 0.826734 18.0139 1.14193 17.992 1.38822C17.7426 4.19928 16.6633 11.021 16.1142 14.1694C15.8818 15.5017 15.4244 15.9484 14.9815 15.9921C14.0189 16.0871 13.288 15.3098 12.3558 14.6543C10.897 13.6287 10.0729 12.9902 8.65691 11.9894C7.02048 10.8327 8.08131 10.197 9.0139 9.15804C9.25797 8.88615 13.4988 4.74875 13.5809 4.37343C13.5912 4.32649 13.6007 4.15151 13.5038 4.05912C13.4069 3.96673 13.2639 3.99833 13.1606 4.02345C13.0143 4.05907 10.6839 5.71119 6.16938 8.97983C5.5079 9.46702 4.90875 9.7044 4.37193 9.69196C3.78013 9.67824 2.64175 9.33306 1.79548 9.038C0.757494 8.6761 -0.0674757 8.48477 0.00436067 7.87015C0.0417775 7.55002 0.452793 7.22262 1.23741 6.88796Z"
                                        fill="#F3F3F3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <a href="#header" className="footer__up_top_button">
                            <svg width="14" height="16" className='footer__up_top_button_icon' viewBox="0 0 14 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 16L7 2M7 2L1 8M7 2L13 8" stroke="#252424" strokeWidth="1.5"/>
                            </svg>
                        </a>
                        <a href="#" className="footer__copyright">© 2024 — Budakov Dmytro</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer;