import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.component.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Samsung',
                    imageUrl:
                        'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3 ',
                    id: 1,

                    linkUrl: 'Samsung',
                },
                  {
                    title: 'Apple',
                    imageUrl:
                        'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3 ',
                    id: 1,

                    linkUrl: 'Samsung',
                },
                {
                    title: 'Tecno',
                    imageUrl: 'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3',
                    id: 2,
                   
                    linkUrl: ''
                },
                {
                    title: 'Huawei',
                    imageUrl:'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3 ',
                    id: 3,
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'Infinix',
                    imageUrl: 'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3',
                    id: 4,
                    size: 'large',
                    linkUrl:'https://previews.dropbox.com/p/thumb/AA8yCwtGCJJ1bn3lE_Po7PcOsl_i9nA39soOJe8tIUX-_nA3-OPVhXs2FnxP7qeg-6PmsAIAf0QQ0O0nceWwQzfubGD9Z33Xf8n694qXfZjwFtEVP_JlS5QMaGz07xegtsTGdysh2I83jj835uBsiA8Y5XwxrPb82DEdBRC5TE6sb2knH5hQu_3ZzvupYBy3CNOmWWHg7Ljzf75TU-Elg05uCJODI7iqo3a-M_AdNG_YWtA09CBkL1hrDcvzm3m2dlZEszRAmZi6znzYLN4j2uftVFn5Ti7Bi-6XgvJoBGFR8CVTBmu10q1iXZqIjfT26R2Ri1BWcPkNzS-i9DYSHEKuGyHS5jtKuWj8K256AdxWeslMyVi2rm77kG_RGZve02I/p.jpeg?size=1600x1200&size_mode=3 '
                },
            ],
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}
export default Directory;
