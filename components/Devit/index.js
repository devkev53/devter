import Styles from "./styles.module.css"
import Avatar from "components/Avatar"
import { useEffect } from "react"
import { getTimeGo } from "utils/timeGo"
import { useTimeAgo } from "hooks/useTimeAgo"

const Devit = ({ avatar, username, created_at, name, content, id, images }) => {
  const timeGo = useTimeAgo(created_at)
  console.log(images)
  return (
    <>
      <article className={Styles.article} key={id}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <div className={Styles.userInfo}>
            <strong>{name || username}</strong>
            <p>@{username}</p>
            <span>{timeGo}</span>
          </div>
          <div>
            <p>{content}</p>
            <section>
              {Array.isArray(images) &&
                images.map((img) => <img key={img.id} src={img.path} />)}
            </section>
          </div>
        </section>
      </article>
      <style jsx>{`
        div {
          margin-right: 1rem;
        }
      `}</style>
    </>
  )
}

export default Devit
