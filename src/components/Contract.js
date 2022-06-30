import React, { useRef } from 'react';
import './Header/Contract.css';


import emailjs from '@emailjs/browser';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contract = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lnkkzbb', 'template_696f2b8', form.current, 'BSgwyuQ5jNV5xLZQt')
            .then((result) => {
                console.log(result.text);
                toast.success("Thanks! Message sent successfully");
            }, (error) => {
                console.log(error.text);
                toast.error("Something wrong! Try again");
            });

    };
    return (
        <section className="contact" id="contact">

            <h1 className="font-bold text-4xl text-secondary my-1o mt-10 text-center text-primary">Contact me </h1>

            <div className="row">

                <div className="content">

                    <h3 className="title text-bold">contact info</h3>

                    <div className="info">
                        <h3> <i className="fas fa-envelope"></i> jahanarajuma213@gmail.com </h3>
                        <h3> <i className="fas fa-phone"></i> +880-1400802863 </h3>

                        <h3> <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh </h3>
                    </div>

                </div>



                <form ref={form} onSubmit={sendEmail} action="">

                    <input type="text" placeholder="name" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                    <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

                </form>

            </div>

        </section>


    );
};

export default Contract;


// <section className="contact" id="contact">

        //     <h1 className="font-bold text-4xl text-secondary my-1o mt-10 text-center">Contact me </h1>

        //     <div className="row">

        //         <div className="content">

        //             <h3 className="title">contact info</h3>

        //             <div className="info">
        //                 <h3> <i className="fas fa-envelope"></i> jahanarajuma213@gmail.com </h3>
        //                 <h3> <i className="fas fa-phone"></i> +880-1400802863 </h3>

        //                 <h3> <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh </h3>
        //             </div>

        //         </div>

        //         <form action="">

        //             <input type="text" placeholder="name" className="box" />
        //             <input type="email" placeholder="email" className="box" />
        //             <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
        //             <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

        //         </form>

        //     </div>

        // </section>

