/*
 * @Author: Innei
 * @Date: 2020-04-30 12:21:51
 * @LastEditTime: 2020-05-31 19:07:17
 * @LastEditors: Innei
 * @FilePath: /mx-server/src/gateway/gateway.module.ts
 * @Coding with Love
 */
import { Global, Module } from '@nestjs/common'

import { AuthService } from '~/modules/auth/auth.service'

import { AdminEventsGateway } from './admin/events.gateway'
import { SharedGateway } from './shared/events.gateway'
import { SystemEventsGateway } from './system/events.gateway'
import { WebEventsGateway } from './web/events.gateway'

@Global()
@Module({
  imports: [],
  providers: [
    AdminEventsGateway,
    WebEventsGateway,
    SharedGateway,
    SystemEventsGateway,
    AuthService,
  ],
  exports: [
    AdminEventsGateway,
    WebEventsGateway,
    SharedGateway,
    SystemEventsGateway,
  ],
})
export class GatewayModule {}
