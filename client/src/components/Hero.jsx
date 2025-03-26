import React from 'react'

const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up">
      {/* -- ROW 1 -- */}
      {/* Cell (row1,col1): Left illustration */}
      <img 
      className="col-span-1 w-32 h-auto object-contain max-md:hidden"
      src="./illustration-left.svg" 
      alt="Dentist illustration" 
      />

      {/* Cell (row1,col1): Main headline */}
      <h1 className="col-span-3 text-center px-4 max-md:px-0 max-md:py-5">
        Η ΜΕΡΑ ΞΕΚΙΝΑ ΜΕ ΕΝΑ ΛΕΥΚΟ <span className="text-primary">ΧΑΜΟΓΕΛΟ</span>
      </h1>

      {/* Cell (row1,col3): Right illustration */}
      <img 
      className="col-span-1 w-46 h-auto object-contain  max-md:hidden" 
      src="./illustration-right.svg" 
      alt="Dentist illustration" 
      />

      {/* -- ROW 2 -- */}
      {/* Cell (row2,col1): Left text */}
      <p className="col-span-1 text-center w-xs max-md:px-0 max-md:py-5">
        Καλωσορίσατε στην κλινική μας! 
        Εδώ ξεκινά η φροντίδα για ένα υγιές, 
        αστραφτερό χαμόγελο.
      </p>

      {/* Cell (row2,col2): Portrait */}
      <img
        className="col-span-3 portrait max-md:px-0"
        src="./dentist.jpg"
        alt="Dentist portrait"
      />

      {/* Cell (row2,col3): Right text */}
      <p className="col-span-1 text-center w-xs max-md:px-0 max-md:py-5">
        Με σύγχρονες τεχνικές, εξειδικευμένη γνώση 
        και φιλική εξυπηρέτηση, είμαστε εδώ 
        για κάθε σας ανάγκη.
      </p>
    </div>

  )
}


export default Hero
