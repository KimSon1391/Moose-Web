import Loading from 'components/Loading/Loading';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Category = React.lazy(() => import('../pages/CatagoryPage'));
const Detail = React.lazy(() => import('../pages/Detail/DetailPage'));
const Home = React.lazy(() => import('../pages/HomePage'));

function Routes(props) {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <Loading />
        </div>
      }
    >
      <Switch>
        <Route path="/:category/search/:search" component={Category} />
        <Route path="/:category/:movieId" component={Detail} />
        <Route path="/:category" component={Category} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
