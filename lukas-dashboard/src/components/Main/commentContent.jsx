import ProfileLogo from "../Reusable/profileLogo"

export default function CommentContent() {
return (
<>
<div className="commentGrid">
                <ProfileLogo></ProfileLogo>
                <section className="comment">
                    <h3>Fiona Hutchison</h3>
                    <p>This is a comment</p>
                </section>
            </div>
</>
)
}