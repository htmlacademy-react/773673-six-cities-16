import { ReactNode } from 'react';

export const Layout = ({
  navigation,
  title,
  sorting,
  offersList,
  map,
}: {
  navigation: ReactNode;
  title: ReactNode;
  sorting: ReactNode;
  offersList: ReactNode;
  map: ReactNode;
}): ReactNode => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">{navigation}</section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            {title}
            {sorting}
            {offersList}
          </section>
          <div className="cities__right-section">{map}</div>
        </div>
      </div>
    </main>
  </div>
);
