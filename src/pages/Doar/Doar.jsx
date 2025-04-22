import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaCheckCircle, FaBox } from "react-icons/fa";
import styles from "./doar.module.scss"; // agora usando módulos corretamente

export default function Doar() {
  const [mensagem, setMensagem] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    documento: "",
    tipo: "doador",
    tipoItem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setMensagem("Cadastro enviado com sucesso!");
    setForm({
      nome: "",
      email: "",
      telefone: "",
      documento: "",
      tipo: "doador",
      tipoItem: "",
    });
  };

  return (
    <motion.div
      className={styles["doar-container"]}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>Formulário para Doação</h2>
      <form className={styles["doar-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label><FaUser /> Nome:</label>
            <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
          </div>
          <div className={styles["form-group"]}>
            <label><FaEnvelope /> E-mail:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label><FaPhone /> Telefone:</label>
            <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} />
          </div>
          <div className={styles["form-group"]}>
            <label><FaIdCard /> Documento:</label>
            <input type="text" name="documento" value={form.documento} onChange={handleChange} />
          </div>
        </div>

        <div className={styles["form-group"]}>
          <label><FaBox /> Tipo de Item a ser Doado:</label>
          <input type="text" name="tipoItem" value={form.tipoItem} onChange={handleChange} required />
        </div>

        <div className={styles["radio-group"]}>
          <label>
            <input type="radio" name="tipo" value="doador" checked={form.tipo === "doador"} onChange={handleChange} />
            Doador
          </label>
          <label>
            <input type="radio" name="tipo" value="catador" checked={form.tipo === "catador"} onChange={handleChange} />
            Catador
          </label>
        </div>

        <button className={styles.btn} type="submit">Enviar</button>

        {mensagem && (
          <motion.p
            className={styles.mensagem}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCheckCircle style={{ marginRight: 6 }} />
            {mensagem}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
