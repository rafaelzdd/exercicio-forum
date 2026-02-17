function status(request, response) {
  response.status(200).json({ mensagem: "funfou" });
}

export default status;
