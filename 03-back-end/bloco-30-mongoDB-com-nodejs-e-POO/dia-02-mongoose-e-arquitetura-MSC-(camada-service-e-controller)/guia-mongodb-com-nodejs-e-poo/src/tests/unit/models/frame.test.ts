import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves([frameMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId._id);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a frame', () => {
    it('successfully created', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('searching a frame', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
  
  describe('reading frames', () => {
    it('successfully found', async () => {
      const framesFound = await frameModel.read();
      expect(framesFound).to.be.deep.equal([frameMockWithId]);
    });
  });

  describe('deleting a frame', () => {
    it('successfully deleted', async () => {
      const frameDeleted = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(frameDeleted).to.be.deep.equal(frameMockWithId._id);
    });

    it('_id not found', async () => {
      try {
        await frameModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
