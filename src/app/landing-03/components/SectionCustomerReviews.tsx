import CustomerReviewsItens from "./CustomerReviewsItens"

const data = {
  comment: 'Great quality, and showed they can work through a problem and maintain excellent customer service!!',
  author: 'Susana Santos'
}

const SectionCustomerReviews = () => {
  return (
    <div className="max-w-[1230px] mx-auto mt-16">
      <h1 className="w-[584px] mb-12 text-sky-900 text-4xl font-black uppercase tracking-tight">Customer reviews</h1>
      <ul className='flex gap-8'>
        <CustomerReviewsItens comment={data.comment} author={data.author} />
        <CustomerReviewsItens comment={data.comment} author={data.author} />
        <CustomerReviewsItens comment={data.comment} author={data.author} />
      </ul>
    </div>
  )
}

export default SectionCustomerReviews