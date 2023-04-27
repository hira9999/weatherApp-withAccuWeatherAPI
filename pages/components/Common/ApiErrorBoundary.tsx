import {
  ApolloClient,
  ApolloError,
  type NormalizedCacheObject,
} from '@apollo/client';
import {
  GEOPOSITION_SEARCH_QUERY,
  CURRENTCONDITIONS_QUERY,
  FIVEDAYS_FCST_QUERY,
  TWELVEHOURS_FCST_QUERY,
  AIR_QUALITY_KHAIVALUES_QUERY,
} from '../../../graphql/client/queryClient';
import React, { Component, type ReactNode } from 'react';

interface ApiErrorBoundaryProps {
  children: ReactNode;
  client: ApolloClient<NormalizedCacheObject>;
}

interface ApiErrorBoundaryState {
  hasError: boolean;
  path: string[];
}

class APIErrorBoundary extends Component<
  ApiErrorBoundaryProps,
  ApiErrorBoundaryState
> {
  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, path: [] };
  }

  static getDerivedStateFromError(error: ApolloError) {
    console.error(error);
    return { hasError: true, path: error.graphQLErrors[0].path };
  }

  async handleRefetchQueries() {
    // 처음위치찾기에 실패했을때
    if (this.state.path[0] === 'getLocation') {
      await this.props.client.refetchQueries({
        include: [GEOPOSITION_SEARCH_QUERY],
      });
      this.setState({ hasError: false });
      this.setState({ path: [] });
      return;
    }
    // 날씨데이터만 실패했을때
    if (
      this.state.path[0] === 'getCurrentCondition' ||
      this.state.path[0] === 'getFiveDaysFcst' ||
      this.state.path[0] === 'getTwelveHoursFcst' ||
      this.state.path[0] === 'getCtprvnRltmMesureDnsty'
    ) {
      await this.props.client.refetchQueries({
        include: [
          CURRENTCONDITIONS_QUERY,
          AIR_QUALITY_KHAIVALUES_QUERY,
          FIVEDAYS_FCST_QUERY,
          TWELVEHOURS_FCST_QUERY,
        ],
      });
      this.setState({ hasError: false });
      this.setState({ path: [] });
      return;
    }

    await this.props.client.refetchQueries({ include: 'active' });
    this.setState({ hasError: false });
    this.setState({ path: [] });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div
            className={`${
              this.state.hasError ? 'top-0' : '-top-12'
            } fixed w-full bg-[#292A2D] text-center p-1 text-sm duration-700 transition-all cursor-pointer hover:underline`}
            onClick={() => {
              this.handleRefetchQueries();
            }}
          >
            데이터를 불러오는데 실패했습니다 ( 여길 클릭하여 재시도 )
          </div>
        </>
      );
    }
    // 자식 컴포넌트를 렌더링합니다.
    return this.props.children;
  }
}

export default APIErrorBoundary;
