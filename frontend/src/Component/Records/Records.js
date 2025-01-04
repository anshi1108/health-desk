import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Records.css'; // Ensure to add your CSS file

const MedicalRecords = () => {
    const records = [
        {
            id: 1,
            title: 'Annual Health Checkup - June 2023',
            image: 'https://5.imimg.com/data5/QC/DL/GLADMIN-33165366/basic-health-checkup-package-500x500.jpg',
            description: 'A routine health checkup that includes blood tests, general consultation, and basic screenings.',
            date: 'June 15, 2023',
            details: 'The blood test results showed normal cholesterol levels and good liver function. The general consultation indicated no major health concerns. Blood pressure and heart rate were within normal range.',
        },
        {
            id: 2,
            title: 'Chest X-Ray Report - July 2023',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpG0xwjiIHyvGSCIJDOCZ_VEzEntS0LHnhCQ&s',
            description: 'X-ray of the chest for lung examination.',
            date: 'July 10, 2023',
            details: 'The X-ray report shows clear results with no signs of infection, lung disease, or abnormality. The lung capacity is normal, and there are no signs of a previous chest infection.',
        },
        {
            id: 3,
            title: 'MRI Scan of Knee - August 2023',
            image: 'https://ebv2e3r5onu.exactdn.com/wp-content/uploads/2020/05/brain-scan.jpg?strip=all&lossy=1&ssl=1',
            description: 'MRI scan performed to check for any damage or issues in the knee joint.',
            date: 'August 5, 2023',
            details: 'The MRI report indicates no major issues with the knee joint. There is mild cartilage wear but no tears or ligament damage. The overall condition is good, and physical therapy is recommended for strengthening the knee.',
        },
        // Add more records as needed
    ];

    return (
        <div className="medical-records-page">
            <Header />
            <Navbar />
            <div className="firstpart">
               
                <div className="records-content">
                    <h2 className="records-heading">My Medical Records</h2>
                    <div className="records-container-inline">
                        {records.map((record) => (
                            <div className="record-card" key={record.id}>
                                <img className="record-image" src={record.image} alt={record.title} />
                                <div className="record-content">
                                    <h3 className="record-title">{record.title}</h3>
                                    <p className="record-description">{record.description}</p>
                                    <span className="record-date">{record.date}</span>
                                    <p className="record-details">{record.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="secondpart">
                <Footer />
            </div>
        </div>
    );
};

export default MedicalRecords;
