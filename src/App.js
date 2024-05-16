import Header from './Youtubeprops/Header';
import YoutubeCard from './Youtubeprops/Youtubeprops';
import './App.css';

function App() {
  return (
    <div>
         <Header />
      <div style={{display:"flex", flexWrap:'wrap'}}>
        <YoutubeCard imgLink='https://i.ytimg.com/vi/CW6jDJdmloo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuA32vulBzdBjjQmxWhKxs-5_4ow'
                    heading ='Hanuman Chalisha'
                      views = '8.4k views'
                       days = '10 days before'        
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/lR5OARai9Zk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBplY7e2bNI87XlLgPCxvGe8pxG2w' 
                     heading ='Bajrang Bali Song'
                     views = '7.4k views .'
                    days = '18 days before'
        />
       
        <YoutubeCard imgLink='https://i.ytimg.com/vi/eJOEGy3mRNA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEZPhwo4t2pXZyNbEbRGFnorvabQ'
                    heading ='Maruti (Bajrangbali)'
                      views = '9.4k views .'
                       days = '1 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/YTptpjXs9PU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWX8BPQkSvKP1rnqaFIj0CbsoSFw'
                     heading ='BajrangBali Chalisha '
                     views = '10k views .'
                      days = '2 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/2LszahPxU8k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtbGkmXlfVtugUCuA5AbHe_U2cfQ'
                       heading ='Sri Ram Nabami Special'
                       views = '11.4k views  .'
                        days = '6 month before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/A9ylUHD_Fh0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqzHIHXT7CEzXECMiBbAMwCYbJgQ' 
                      heading ='Sankat Mochana Hanuman'
                      views = '8.9k views .'
                       days = '15 days before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/VKusGEauZ4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPgn8-XYiWFr5x5z9SMrzZGqKxEA'
                      heading ='Hanuman Chalisha Audio Version'
                      views = '7.4k views'
                       days = '2 months before'
        />
        <YoutubeCard imgLink='https://i.ytimg.com/vi/-T63Pondfv4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfGGIa-A_K9eZdRyIS06XeKDfM8A'
                      heading ='Hanuman Chalisha'
                      views = '8.4k views'
                      days = '10 days before'
        />        
      </div>
    </div>
  );
}

export default App;
