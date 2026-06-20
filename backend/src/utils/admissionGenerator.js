const generateAdmissionNumber = () => {
  const timestamp = Date.now();

  return `ADM${timestamp}`;
};

module.exports = generateAdmissionNumber;