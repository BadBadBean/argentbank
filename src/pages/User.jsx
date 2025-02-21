import Account from "../components/Account";
import Button from "../components/Button";
import accountsData from "../data/accounts.json";

export default function User() {
  return (
    <main className="dark-bg">
      <section className="user__header">
        <h2 className="user__header__title">Welcome back</h2>
        <Button type="button" label="Edit Name" buttonClass="edit__button" />
      </section>
      <section className="accounts">
        {accountsData.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
            button={
              <Button
              buttonClass="account__button"
                type="button"
                label="View transactions"
              />
            }
          />
        ))}
      </section>
    </main>
  )
}
