export default function LoanRules() {
  return (
    <div className="">
      <h2 className="mb-2 text-center text-xl font-semibold">
        Loan&apos;s rules
      </h2>
      <ul className="flex list-outside list-disc flex-col gap-2">
        <li>
          <p>
            You can only borrow one book at a time! Return the book you are
            reading to borrow another one.
          </p>
        </li>
        <li>
          <p>
            Watch for the return date! The loan lasts 7 days. If you need more
            time to finish the book, renew your loan at Your Books.
          </p>
        </li>
        <li>
          <p>Books are awesome! Enjoy yourself reading.</p>
        </li>
      </ul>
    </div>
  );
}
