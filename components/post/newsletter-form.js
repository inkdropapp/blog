import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://dog.us19.list-manage.com/subscribe/post?u=b4dcea5c59e9244a7d64f96f5&id=d918678395";

export default function NewsletterForm() {
  return (
    <div className="newsletter-form">
      <p>I will notify you when I add a new article to my blog :)</p>
      <MailchimpSubscribe url={url} />
      <style jsx>{`
        .newsletter-form {
          margin: 1rem 0;
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background: rgba(245, 247, 250, 1);
        }
        div {
          text-align: center;
        }
        p {
          font-size: 15px;
          color: #999;
          text-align: center;
          display: block;
          margin-bottom: 10px;
        }
        p > :global(a) {
          color: #666;
        }
        .newsletter-form :global(input[type="email"]) {
          border: 1px solid #e5e7eb;
          padding: 0.5rem 0.8rem;
          margin-top: 10px;
        }
        .newsletter-form :global(button) {
          margin-left: 8px;
          background: black;
          color: white;
          border: none;
          padding: 0.5rem 0.8rem;
        }
      `}</style>
    </div>
  );
}
