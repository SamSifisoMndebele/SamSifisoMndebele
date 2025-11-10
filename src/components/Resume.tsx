const Resume = () => {
    return (
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5">
                    <span className="text-danger">My</span> Resume
                </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Education</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022 - Present</h6>
                                <h5>BSc Mathematical Science: Computer Science</h5>
                                <p>University of Limpopo</p>
                                <p className="subtitle">
                                    Surrounded by a community of like-minded peers and lecturers, I delved deep into
                                    advanced programming, data structures, and algorithms. I undertook various projects
                                    that challenged me to apply theoretical knowledge to real-world problems, from
                                    creating innovative mobile applications to developing complex web platforms. These
                                    experiences not only honed my technical skills but also instilled a strong sense of
                                    teamwork and collaboration, as I often worked in multidisciplinary teams.
                                </p>
                                <hr/>
                                <h6 className="title text-danger">2018 - 2021</h6>
                                <h5>Self Learning Programming</h5>
                                <p className="subtitle">
                                    I started learning how to program websites, mobile apps, and games, and I became
                                    more interested in the field of computer science. I became passionate about being an
                                    expert in this field by channeling knowledge and skills to ensure personal and
                                    professional growth.
                                </p>
                                <hr/>
                                <h6 className="title text-danger">2013 - 2017</h6>
                                <h5>Mhlume Secondary School</h5>
                                <p className="subtitle">
                                    Admission to bachelor's degree<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>Java and Kotlin</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '99%'}}
                                         aria-valuenow={99} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>Python</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}}
                                         aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>SQL</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}}
                                         aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>Assembly</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}}
                                         aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>HTML5 & CSS3</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}}
                                         aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}}
                                         aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>PHP</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}}
                                         aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Languages</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>English</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}}
                                         aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>SiSwati</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '97%'}}
                                         aria-valuenow={97} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <h6>Pedi</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '40%'}}
                                         aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
