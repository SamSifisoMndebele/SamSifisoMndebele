import React, {useState} from 'react';
import {db} from '@/firebase/init-firebase';
import {addDoc, collection} from 'firebase/firestore';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addDoc(collection(db, 'ContactUs'), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date(),
            });
            toast.success("Your message has been sent successfully!"); // Use toast.success
            setFormData({name: '', email: '', phone: '', message: ''});
        } catch (error) {
            console.error('Error adding document: ', error);
            toast.error("Failed to send message. Please try again."); // Use toast.error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="section contact" id="contact">
            <iframe
                title="map"
                className="map"
                id="map"
                width="100%"
                style={{border: 0}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.33269586726652!2d31.154130775885324!3d-25.360484570110884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee839ca74913f63%3A0x5bed9ed642e818e8!2sAVIDCo!5e0!3m2!1sen!2sza!4v1729181807545!5m2!1sen!2sza"
            ></iframe>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-form-card">
                            <h4 className="contact-title">Get in Touch</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name(s) *"
                                        pattern="[a-zA-Z \'.]{2,}"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email *"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                  <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={8}
                      minLength={16}
                      placeholder="Message *"
                      required
                      value={formData.message}
                      onChange={handleChange}
                  ></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button
                                        type="submit"
                                        className="form-control text-center btn btn-primary"
                                        id="button"
                                        style={{height: '50px'}}
                                        disabled={isLoading} // Disable button when loading
                                    >
                                        {isLoading ? (
                                            <><i className="fa fa-spinner fa-spin mr-2"></i>Sending...</>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info-card">
                            <h4 className="contact-title">Get in touch</h4>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1"><i className="ti-mobile icon-md"></i></div>
                                <div className="col-10">
                                    <h6 className="d-inline">Phone :</h6>
                                    <br/>
                                    <span className="text-muted"> +27 72 164 6430</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1"><i className="ti-map-alt icon-md"></i></div>
                                <div className="col-10">
                                    <h6 className="d-inline">Address :</h6>
                                    <br/>
                                    <span className="text-muted">104 Clau-Clau, No. 2<br/>Kabokweni, 1245, MP</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-1 pt-1 mr-1"><i className="fa-regular fa-envelope icon-md"></i>
                                </div>
                                <div className="col-10">
                                    <h6 className="d-inline">Email :</h6>
                                    <br/>
                                    <span className="text-muted"> sams.mndebele@avidco.co.za</span>
                                </div>
                            </div>
                            <ul className="social-icons pt-4">
                                <li className="social-item">
                                    <a href="https://github.com/SamSifisoMndebele" target="_blank"
                                       rel="noopener noreferrer" className="social-link text-dark">
                                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://www.facebook.com/sam.sifiso.mndebele" target="_blank"
                                       rel="noopener noreferrer" className="social-link text-dark">
                                        <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://wa.me/27721646430?text=%3E%20From%20Portfolio%0AHi%20Sam,%0A"
                                       target="_blank" rel="noopener noreferrer" className="social-link text-dark">
                                        <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="mailto:sams.mndebele@avidco.co.za" target="_blank"
                                       rel="noopener noreferrer" className="social-link text-dark">
                                        <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
