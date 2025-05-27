import { getContentBySlug } from '@/app/services/wordPress';
import { sampleCMSPost } from './fixtures/cmsData';

jest.mock('fetch');
const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('WordPress API', () => {
  it('getContentBySlug should return awesome things', async () => {
    mockedFetch.mockResolvedValueOnce({
      json: async () => sampleCMSPost,
      ok: true,
      status: 200,
    } as Response);

    const result = await getContentBySlug('slug');
    expect(result).toEqual(sampleCMSPost);
  });
});
