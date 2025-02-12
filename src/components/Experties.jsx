import React from "react";
import { motion } from "framer-motion";
import "./Experties.css";
import { Card } from "react-bootstrap";



const yogaTypes = [
  { name: "Hatha Yoga", description: "A gentle practice focusing on breath, basic postures, and alignment." },
  { name: "Vinyasa Yoga", description: "A dynamic flow linking breath with movement for strength and flexibility." },
  { name: "Kundalini Yoga", description: "A spiritual practice combining breath, movement, and chanting." },
  { name: "Intuitive Yoga", description: "A free-flowing, personalized approach that listens to the body's needs." },
  { name: "Aroma Yoga", description: "A unique blend of yoga and aromatherapy for relaxation and balance." },
  { name: "Slow Yoga", description: "A mindful practice focusing on deep stretching and relaxation." },
];

const Experties = () => {

  return (
    <div className="experties-container" data-aos="fade-right" >
      <h1 className="head">Know <br/> My Experties</h1>
      
      <div className="container">
      <div className="row">
        {yogaTypes.map((yoga, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>{yoga.name}</Card.Title>
                <Card.Text>{yoga.description}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>


    </div>
  );
};

export default Experties;