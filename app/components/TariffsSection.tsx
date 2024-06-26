'use client'

import {motion} from "framer-motion"

const TariffsSection = () => {
    return (
        <section id='tariffs' className="tariffs_section">
            <div className="container">
                <motion.h2
                    initial={{x: 700, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 1}}
                    viewport={{once: true}}
                    className="title_section title_section-dark tariffs_section__title_section"
                >
                    Тарифы
                </motion.h2>
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1.5}}
                    viewport={{once: true}}
                    className="title_section title_section-dark tariffs_section__title_section_mobile"
                >
                    Тарифы
                </motion.h2>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 2}}
                    viewport={{once: true}}
                >
                    <div className="tariffs_section__cards">
                        <div className="tariffs_section__card">
                            <h4 className="tariffs_section__card_title">standart</h4>
                            <ul className="tariffs_section__card_list">
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>

                                    <p className="tariffs_section__card_list_item_text">Доступ ко всем обучающим
                                        метариалам интенсива</p></li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>

                                    <p className="tariffs_section__card_list_item_text">Доступ к чату с Олесей и
                                        участниками</p></li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>

                                    <p className="tariffs_section__card_list_item_text">Возможность задавать
                                        вопросы</p>
                                </li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>

                                    <p className="tariffs_section__card_list_item_text">Доступ к материалам 2
                                        месяца</p>
                                </li>
                                <li className="tariffs_section__card_list_item disabled">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>

                                    <p className="tariffs_section__card_list_item_text">Личная консультация
                                        Олеси с разбором анализов и рекомендациями на 2 месяца</p></li>
                            </ul>
                            {/*<div className="tariffs_section__card_price tariffs_section__card_price_first old"><span*/}
                            {/*    className='tariffs_section__card_price_number first'>2<span*/}
                            {/*    className='small'>8</span></span><span*/}
                            {/*    className='tariffs_section__card_price_сurrency'>$/</span> <span*/}
                            {/*    className='tariffs_section__card_price_number'>1090</span> <span*/}
                            {/*    className='tariffs_section__card_price_сurrency'>₴</span></div>*/}
                            <div className="tariffs_section__card_price tariffs_section__card_price_first new"><span
                                className='tariffs_section__card_price_number first'>28</span><span
                                className='tariffs_section__card_price_сurrency'>$/</span> <span
                                className='tariffs_section__card_price_number'>1090</span> <span
                                className='tariffs_section__card_price_сurrency'>₴</span></div>
                            <a href="https://t.me/olesya_healthcoach" target='_blank'
                               className="btn btn__secondary tariffs_section__card_link">Участвовать</a>
                        </div>
                        <div className="tariffs_section__card">
                            <h4 className="tariffs_section__card_title">Premium</h4>
                            <ul className="tariffs_section__card_list">
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <p className="tariffs_section__card_list_item_text">Доступ ко всем обучающим
                                        метариалам интенсива</p></li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <p className="tariffs_section__card_list_item_text">Доступ к чату с Олесей и
                                        участниками</p></li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <p className="tariffs_section__card_list_item_text">Возможность задавать
                                        вопросы</p>
                                </li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <p className="tariffs_section__card_list_item_text">Доступ к материалам 2
                                        месяца</p>
                                </li>
                                <li className="tariffs_section__card_list_item">
                                    <div className="tariffs_section__card_list_item_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM24.152 14.21C24.2837 14.0595 24.384 13.8841 24.4469 13.6943C24.5098 13.5044 24.5341 13.3039 24.5184 13.1045C24.5027 12.9051 24.4473 12.7108 24.3554 12.5332C24.2635 12.3555 24.137 12.1981 23.9833 12.07C23.8297 11.942 23.652 11.8459 23.4606 11.7876C23.2693 11.7292 23.0683 11.7097 22.8693 11.7302C22.6704 11.7507 22.4775 11.8108 22.3021 11.9069C22.1267 12.0031 21.9723 12.1333 21.848 12.29L15.398 20.0285L12.0605 16.6895C11.7776 16.4163 11.3987 16.2651 11.0054 16.2685C10.6121 16.2719 10.2359 16.4297 9.95777 16.7078C9.67966 16.9859 9.52191 17.3621 9.51849 17.7554C9.51507 18.1487 9.66626 18.5276 9.9395 18.8105L14.4395 23.3105C14.5869 23.4578 14.7633 23.5728 14.9576 23.6481C15.1519 23.7234 15.3597 23.7574 15.5679 23.748C15.7761 23.7385 15.98 23.6858 16.1666 23.5932C16.3533 23.5005 16.5186 23.3701 16.652 23.21L24.152 14.21Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <div className="tariffs_section__card_list_item_icon_mobile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
                                                  fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                    <p className="tariffs_section__card_list_item_text">Личная консультация Олеси с
                                        разбором анализов и рекомендациями на 2 месяца</p></li>
                            </ul>
                            {/*<div className="tariffs_section__card_price tariffs_section__card_price_second old"><span*/}
                            {/*    className='tariffs_section__card_price_number first'>140</span><span*/}
                            {/*    className='tariffs_section__card_price_сurrency'>$/</span> <span*/}
                            {/*    className='tariffs_section__card_price_number'>5450</span> <span*/}
                            {/*    className='tariffs_section__card_price_сurrency'>₴</span></div>*/}
                            <div className="tariffs_section__card_price tariffs_section__card_price_second new"><span
                                className='tariffs_section__card_price_number first'>140</span><span
                                className='tariffs_section__card_price_сurrency'>$/</span> <span
                                className='tariffs_section__card_price_number'>5450</span> <span
                                className='tariffs_section__card_price_сurrency'>₴</span></div>
                            <a href="https://t.me/olesya_healthcoach" target='_blank'
                               className="btn btn__secondary tariffs_section__card_link">Участвовать</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TariffsSection;