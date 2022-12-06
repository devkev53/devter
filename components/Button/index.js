import { colors } from "../../styles/theme"

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background: ${colors.secondary};
          border-radius: 9999px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        button > :global(svg) {
          margin-right: 8px;
          width: auto;
        }
        button[disabled] {
          opacity: 0.2;
          pointer-events: none;
          user-select: none;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}

export default Button
