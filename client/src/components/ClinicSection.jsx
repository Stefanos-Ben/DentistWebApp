import React from 'react';

const ClinicSection = () => {
  return (
    <section
      id="section-1"
      className="clinic"
      data-aos="fade-left" 
    >
        <div className="max-w-full">
            <div className="flex items-start justify-self-auto gap-2 px-3">
            <svg fill="#7278F2" className="h-7 w-5" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M240.58984,128a15.84794,15.84794,0,0,1-10.53125,15.03711l-63.81543,23.206-23.206,63.81543a16.001,16.001,0,0,1-30.07422,0L89.75684,166.24316l-63.81543-23.206a16.001,16.001,0,0,1,0-30.07422L89.75684,89.75684l23.20605-63.81543a16.001,16.001,0,0,1,30.07422,0l23.206,63.81543,63.81543,23.20605A15.84794,15.84794,0,0,1,240.58984,128Z"></path> </g></svg>
                <h3 className="text-lg font-bold mb-6 text-black text-start">
                Η Κλινική Μας
                </h3>
            </div>
        

        <p className="text-black text-lg md:text-3xl leading-relaxed mb-6 mt-20 text-center">
          Στην οδοντιατρική μας κλινική η <span className="text-primary">φροντίδα</span> και η <span className="text-primary">άνεσή</span> σας
          αποτελούν προτεραιότητα. Με <span className="text-primary">σύγχρονο εξοπλισμό</span> και
          φιλική εξυπηρέτηση, προσφέρουμε μια ολοκληρωμένη εμπειρία που αναδεικνύει
          κάθε χαμόγελο.
        </p>
        </div>
    </section>  
  );
};

export default ClinicSection;

