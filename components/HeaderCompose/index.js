import Styles from "./styles.module.css"
import Button from "components/Button"
import BackArrow from "components/Icons/BackArrow"
import { useAddDevit } from "hooks/useAddDevit"
import Link from "next/link"

const index = () => {
  const { btnStatus, uploadDevit } = useAddDevit()

  return (
    <header className={Styles.header}>
      <Link href="/home">
        <BackArrow />
      </Link>
      <div>
        <Button onClick={uploadDevit} disabled={btnStatus}>
          Devitiar
        </Button>
      </div>
    </header>
  )
}

export default index
