<script>
  export let character;
</script>

<div class="character">
  <img src={character.image} alt={character.name} />
  <h2>{character.name}</h2>
  <div class="batches">
    <div class="batch">
      <b>status:</b> 
      <p>{character.status}</p>
    </div>
    <div class="batch">
      <b>specie:</b> 
      <p>{character.species}</p>
    </div>
  </div>
</div>


<style lang="scss">
  .character{
    background-color: darkslateblue;
    border-radius: 35px;
    transition:all 0.5s;
    cursor: pointer;
    &:hover{
      transform: scale(1.2);

    }
    img{

    border-radius: 35px 35px 0 0 ;
    }
    h2{
      font-family: 'Get Schwifty';
    }
    .batches{
      display: grid;
      grid-template-columns: 1fr 1fr ;
      padding: 20px;
      gap: 8px;
      .batch{

        background-color: greenyellow;
        color:black;
        padding: 4px;
        border-radius: 10px;
        font-family: 'Montserrat', sans-serif;
        p{
          margin:0;
        }
      }

    }

  }
</style>