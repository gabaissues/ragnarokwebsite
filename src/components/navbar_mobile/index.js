
import './index.css'
import React from 'react'

import MenuIcon from '@material-ui/icons/Menu';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export default function NavBar() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };


    return (

        <nav className="navbar-mobile">

            <ClickAwayListener onClickAway={handleClickAway}>
                <div className={ open ? 'navbar-content-open navbar-content' : 'navbar-content' }>

                    <IconButton onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>

                    {open ? (


                        <ButtonGroup orientation="vertical" variant="text">

                            <Button href="/"><h1>Ínicio</h1></Button>
                            <Button href="/produtos"><h1>Produtos</h1></Button>
                            <Button href="/parceiros"><h1>Parcerias</h1></Button>
                            <Button href="/avaliações"><h1>Avaliações</h1></Button>
                            <Button href="/"><h1>Twitter</h1></Button>
                            <Button href="/"><h1>Discord</h1></Button>
                            <Button href="/"><h1>Instagram</h1></Button>

                        </ButtonGroup>



                    ) : null}
                </div>
            </ClickAwayListener>

        </nav>

    )

}