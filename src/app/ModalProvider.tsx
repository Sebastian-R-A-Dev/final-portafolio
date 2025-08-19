"use client"
import { useEffect } from "react"
import Modal from "react-modal"

export function ModalProvider() {
    useEffect(() => {
        // Esto asegura que se ejecute solo en el cliente
        Modal.setAppElement("body") // puedes usar "#__next" o "body"
    }, [])

    return null
}
