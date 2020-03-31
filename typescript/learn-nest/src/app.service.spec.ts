import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

describe('AppService', () => {
    let service: AppService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService]
        }).compile()
        service = module.get<AppService>(AppService)
    })

    it('should be defind', () => {
        expect(service).toBeDefined()
    })

    describe('getPublicItems', () => {
        it('should have deletePassword removed', () => {
            const publicItems = service.getHello()
            expect(publicItems).toBe('Hello World!')
        })
    })
})