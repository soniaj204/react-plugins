/*
 * InfiniteScrollComponentPage
 *
 * List all the infiniteScrollComponent
 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import InfiniteScroll from 'react-infinite-scroll-component';

class InfiniteScrollComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'a',
        'b',
        'c',
        'q',
        'r',
        't',
        'b',
        'b',
        'b',
        'a',
        'i',
        'o',
        'm',
        's',
        'w',
        'a',
        'h',
        't',
        'a',
        'b',
        'c',
        'q',
        'r',
        't',
        'b',
        'b',
        'b',
        'a',
        'i',
        'o',
        'm',
        's',
        'w',
        'a',
        'h',
        't',
      ],
    };
  }

  fetchData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.state.items),
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Infinite Scroll Component Page</title>
          <meta
            name="description"
            content="Infinite Scroll Component page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.scaffoldingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.feedbackHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.feedbackMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.routingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.routingMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.networkHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.networkMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.intlHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.intlMessage} />
            </p>
          </ListItem>
        </List>

        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>
          //     &#8595; Pull down to refresh
          //   </h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          // }
        >
          <List>
          {this.state.items.map((item, index) => (
            <ListItem key={index}>
              <ListItemTitle>
              {item}
              </ListItemTitle>
            </ListItem>
          ))}
            
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteScrollComponentPage;
