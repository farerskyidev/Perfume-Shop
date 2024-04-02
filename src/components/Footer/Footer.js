import React from "react";
import classes from './Footer.module.scss';
import footer_top_icon_1 from '../../img/icon_f_1.png';
import footer_top_icon_2 from '../../img/icon_f_2.png';
import footer_top_icon_3 from '../../img/icon_f_3.png';
import footer_top_icon_4 from '../../img/icon_f_4.png';
import footer_top_icon_5 from '../../img/icon_f_5.png';
import social_f_1 from '../../img/cut_f.png';
import social_f_2 from '../../img/facebook_f.png';
import social_f_3 from '../../img/instagram_f.png';
import social_f_4 from '../../img/youtube_f.png';
import social_f_5 from '../../img/twitter_f.png';
import social_f_6 from '../../img/pinterest_f.png';
import social_f_7 from '../../img/blog_f.png'; 
import country_f from '../../img/country_f.png';
import subscription_f from '../../img/subscription_f.png'; 
import footer_bot_icon_1 from '../../img/american_express.png';
import footer_bot_icon_2 from '../../img/visa.png';
import footer_bot_icon_3 from '../../img/mastercard.png';
import footer_bot_icon_4 from '../../img/discover.png';
import footer_bot_icon_5 from '../../img/paypal.png';
import footer_bot_icon_6 from '../../img/afterpay.png';
import footer_bot_icon_7 from '../../img/amazon.png';    

class Footer extends React.Component {
    render() {
        return (
            <footer className={classes.footer}>
                
                    <section className={classes.footer_top}>
                        <section>
                            <div className={classes.footer_top_item}>
                                <img src={footer_top_icon_1} alt="" />
                                Free Delivery & Returns*</div>
                            <div className={classes.footer_top_item}>
                                <img src={footer_top_icon_2} alt="" />
                                Online Self-Service</div>
                            <div className={classes.footer_top_item}>
                                <img src={footer_top_icon_3} alt="" />
                                100% Genuine Guaranteed</div>
                            <div className={classes.footer_top_item}>
                                <img src={footer_top_icon_4} alt="" /> 
                                Secure Payment</div>
                            <div className={classes.footer_top_item}>
                                <img src={footer_top_icon_5} alt="" />
                                100% authentic products</div>
                        </section>
                    </section>
                    <section className={classes.footer_midle}>
                        <div className={classes.footer_midle_top}>
                            <div className="container__footer d-flex gap-180">
                                <div>
                                    <h3 className={classes.title_lists}>SIGN up for Special Offers and Promotions</h3> 
                                    <form action="" method="get" className={classes.sing_up}>
                                        <div>

                                            <input className={classes.sing_up_field} placeholder="Your Email" type="text" name="name" id="name" required />
                                        </div>
                                        <div>

                                            <input className={classes.sing_up_field} placeholder="Your Mobile" type="email" name="email" id="email" required />
                                        </div>
                                        <div>
                                            <input className={classes.sing_up_submit} type="submit" value="Sing Up" /> 
                                        </div>
                                    </form>
                                    <div className={classes.footer_midle_top__text}>
                                        <p>By entering your email and clicking “subscribe”, you consent to receive marketing emails from e.l.f. You can unsubscribe at any time through the unsubscribe link in each email. See our <a href="/">Privacy Notice</a> for more details, including how your personal information is used and shared.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className={classes.title_lists}>Need help?</h3> 
                                        <p>info@perfumeshop.com</p>
                                    </div>
                                    <div>
                                        <h3 className={classes.title_lists}>Visit Us</h3>
                                        <p>PerfumeShop, Inc.<br />789 Ocean Ave.<br />Coral City, CA 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className={classes.footer_midle_bottom}> 
                            <div>
                                <div>
                                    <div>
                                        <h3 className={classes.title_lists}>SHOP BY DEPARTMENT</h3>
                                        <div className={classes.columns_lists}> 
                                            <ul>
                                                <li><a href="/">Perfumes</a></li>
                                                <li><a href="/">Women's Perfume</a></li>  
                                                <li><a href="/">Men's Cologne</a></li>
                                                <li><a href="/">Haircare</a></li>
                                                <li><a href="/">Boutiques</a></li>
                                                <li><a href="/">50% Off</a></li>
                                                <li><a href="/">Samples</a></li>
                                                <li><a href="/">Skincare</a></li>
                                                <li><a href="/">Aromatherapy</a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="/">Best Sellers</a></li>
                                                <li><a href="/">Clearance</a></li>  
                                                <li><a href="/">For Kids</a></li>
                                                <li><a href="/">Makeup</a></li>
                                                <li><a href="/">Candles</a></li>
                                                <li><a href="/">New Arrivals</a></li>
                                                <li><a href="/">Mini</a></li>
                                                <li><a href="/">Hard to Find</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={classes.title_lists}>CUSTOMER SUPPORT</h3>
                                        <div className={classes.columns_lists}>
                                            <ul>
                                                <li><a href="/">Gift Certificates</a></li>
                                                <li><a href="/">Gift Certificate Balance</a></li>  
                                                <li><a href="/">Accessibility Policy</a></li>
                                                <li><a href="/">Return Policy</a></li>
                                                <li><a href="/">Return Policy</a></li>
                                                <li><a href="/">Security Pledge</a></li>
                                                <li><a href="/">Terms of Use</a></li>
                                                <li><a href="/">Shipping Rates</a></li>
                                                <li><a href="/">100% Genuine</a></li> 
                                            </ul>
                                            <ul>
                                                <li><a href="/">Wholesale Information</a></li>
                                                <li><a href="/">Affiliate Program</a></li>
                                                <li><a href="/">Sitemap</a></li>
                                                <li><a href="/">Perfume Coupons</a></li>
                                                <li><a href="/">Careers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className={classes.title_lists}>MY ACCOUNT</h3> 
                                        <ul>
                                            <li><a href="/">My Account</a></li>
                                            <li><a href="/">Register Now</a></li>  
                                            <li><a href="/">Order Status</a></li>
                                            <li><a href="/">Reminder Club</a></li>
                                            <li><a href="/">CarSign Ineers</a></li> 
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className={classes.socials_f}>
                                            <li><a href="/" target='_blank'><img src={social_f_1} alt="" /></a></li>
                                            <li><a href="/" target='_blank'><img src={social_f_2} alt="" /></a></li>  
                                            <li><a href="/" target='_blank'><img src={social_f_3} alt="" /></a></li>
                                            <li><a href="/" target='_blank'><img src={social_f_4} alt="" /></a></li>
                                            <li><a href="/" target='_blank'><img src={social_f_5} alt="" /></a></li>
                                            <li><a href="/" target='_blank'><img src={social_f_6} alt="" /></a></li>
                                            <li><a href="/" target='_blank'><img src={social_f_7} alt="" /></a></li>  
                                        </ul>
                                        <div className={classes.country_f}><img src={country_f} alt="" /><a href="/">Change Country</a></div>
                                        <div className={classes.subscription_f}><a href="/"><img src={subscription_f} alt="" />subscription club</a></div>
                                        
                                    </div> 
                                </div>
                            </div>                                     
                        </section>
                    </section>
                    <section className={classes.footer_bottom}>
                        <section>
                            <div>
                                Customer Service Code: 0A
                                <div>
                                    <a href="/">Privacy Policy</a><span> | </span>
                                    <a href="/">CA Privacy Notice</a>
                                </div>
                                Entire contents Copyright © 1997-2023. PerfumeShop.com, Inc.
                            </div>
                            <div>
                            PerfumeShop.com is an independent retailer carrying genuine brand name Perfumes, skincare, haircare, candles and makeup.
    PerfumeShop and PerfumeShop.com are trademarks of PerfumeShop, Inc. and are Registered in the US Patent & Trademark Office.<br /><br />All Rights Reserved.
                            </div>
                            <div>
                                <ul className={classes.footer_icons_company}>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_1} alt="" /></a></li>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_2} alt="" /></a></li>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_3} alt="" /></a></li>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_4} alt="" /></a></li>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_5} alt="" /></a></li>
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_6} alt="" /></a></li> 
                                    <li><a href="/" target='_blank'><img src={footer_bot_icon_7} alt="" /></a></li>
                                </ul>
                            </div>
                        </section>
                    </section>
                
            </footer>
        );
    }
}

export default Footer;