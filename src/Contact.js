function Contact() {
    return (
        <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form>
                            <div class="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                                <label for="name">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="name@email.com" />
                                <label for="email">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input className="form-control" id="phone" type="text" placeholder="(044) 123 456 789" />
                                <label for="email">Phone</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter message" />
                                <label for="email">Message</label>
                            </div>
                            <button className="btn btn-primary btn-xl">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;