function SecretMessage({ message, visible }) {
  if (!visible) {
    return null
  }

  return <p>{message}</p>
}
export default SecretMessage