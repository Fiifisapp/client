import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
  ModalContainer,
  Overlay,
  Close
} from "./AdminModal.Style";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const AdminModal = ({ open, onClose }) => {
  const Navigate = useNavigate()
    const {register,
        handleSubmit,
        formState: { errors },
        reset,} = useForm({
            resolver: yupResolver(schema),
          });

  if (!open) return null;

  

  const onSubmitHandler = (data) => {
    Navigate("/Adminboard")
    reset();
  };
  return (
    <div>
      <Overlay onClick={onClose} className="overlay">
        <ModalContainer onClick={(e) => {
            e.stopPropagation()
        }} className="modalContainer">
          <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
            <LoginHeader>Admin Login</LoginHeader>
                <Close onClick={onClose} className="closeBtn">X</Close>
            <Input
              {...register("email")}
              placeholder="email"
              type="email"
              required
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Input
              {...register("password")}
              placeholder="password"
              type="password"
              required
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit">Login</Button>
          </FormContainer>
        </ModalContainer>
      </Overlay>
    </div>
  );
};

export default AdminModal;
